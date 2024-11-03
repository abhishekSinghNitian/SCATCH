const express = require('express')
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const productModel = require('../models/productmodel');
const userModel = require('../models/usermodel');

router.get('/', function (req, res) {
    let error = req.flash("error");
    res.render('index', {error, loggedin : false});
});

router.get('/shop', isLoggedIn, async function (req, res) {
    let product = await productModel.find();
    let error = req.flash("error");
    let success = req.flash("success",'logged in successfully');
    res.render('shop',{product, error, success});
});

router.get('/addtocart/:productid', isLoggedIn, async function (req, res) {
    let user = await userModel.findOne({email : req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    let succes=  req.flash('success','added to cart');
    let error = req.flash('error','something went wrong');
    let product = await productModel.find();
    res.redirect('/shop',{product,success: succes,error: error});
});

// router.get('/logout', isLoggedIn, async function (req, res) {
//     res.redirect('/',{error:'some error'});
// });

router.get('/cart', isLoggedIn, async function (req, res) {
    res.redirect('/');
});
module.exports = router;