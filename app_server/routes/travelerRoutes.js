// app_server/routes/travelerRoutes.js
const express = require('express');
const router = express.Router();
const travelerController = require('../controllers/travelerController');

// Map the '/home' URL to the homePage controller
router.get('/home', travelerController.homePage);

module.exports = router;
