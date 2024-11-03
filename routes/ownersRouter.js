const express = require('express')
const router = express.Router();
const ownerModel = require('../models/ownermodel');
router.get('/', function (req, res) {
    res.send('hey its working');
});

if(process.env.NODE_ENV==="development"){
    router.post('/create', async function(req, res) {

    });
}
router.get('/admin', function (req, res) {
    let success = req.flash('success');
    res.render('createproducts',{success: success});
});
module.exports = router;