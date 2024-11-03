const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser, cart} = require("../controllers/authController");
require("dotenv").config();
router.get('/', function (req, res) {
    res.send('hey its working');
});

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/logout',logoutUser);

module.exports = router;