const usermodel = require('../models/usermodel');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');
const productModel = require('../models/productmodel');


// User Registration
module.exports.registerUser = async function(req, res) {
    try {
        let { email, password, fullname } = req.body;
        let user = await usermodel.findOne({ email: email });
        
        if (user) {
            return res.status(401).send("You've already got an account, mate! Please log in. 😅");
        }

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, async function(err, hash) {
                if (err) {
                    return res.status(500).send('Uh-oh! Hashing error: ' + err.message);
                } else {
                    let user = await usermodel.create({
                        email: email,
                        password: hash,
                        fullname: fullname
                    });

                    let token = generateToken(user);
                    res.cookie('token', token);
                    res.render('users'); // Render some user page here
                    console.log("User registration successful! 🎉");
                }
            });
        });

    } catch (err) {
        console.log(err.message);
    }
};

module.exports.loginUser = async function(req, res) {
    let { email, password } = req.body;

    let user = await usermodel.findOne({ email: email });

    if (!user) {
        req.flash("error", "Uh-oh, Email or password is incorrect! 😟");
        return res.redirect('/');  // Redirect back to login page
    }

    bcrypt.compare(password, user.password, async function(err, result) {
        if (result) {
            let token = generateToken(user);
            res.cookie("token", token);

            let success = req.flash("success", "Logged in successfully!");
            let product = await productModel.find();
            res.render("shop",{product,success,error:'something went wrong'}); // Pass the products to the template
  
        } else {
            let error = req.flash("error","invalid email or password");
            res.render('index',{error});
        }
    });
} 



module.exports.logoutUser = async function(req, res) {
    res.redirect('/');
};


