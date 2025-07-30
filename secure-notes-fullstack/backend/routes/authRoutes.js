const express = require('express');
const router = express.Router();
const { loginUser, verifyOTP } = require('../controllers/authController');

router.post('/login', loginUser);
router.post('/verify-otp', verifyOTP);

module.exports = router;