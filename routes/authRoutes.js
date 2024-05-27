const express = require('express');
const router = express.Router();
const { register, login, getProfile } = require('../controllers/AuthController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', verifyToken, getProfile);

module.exports = router;
