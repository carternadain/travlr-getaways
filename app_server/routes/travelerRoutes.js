// app_server/routes/travelerRoutes.js
const express = require('express');
const router = express.Router();

const travelerController = require('../controllers/travelerController');
const ctrlTravel = require('../controllers/travel'); 

// Map the '/home' URL to the homePage controller
router.get('/home', travelerController.homePage);

/* GET travel page */
router.get('/travel', travelerController.travelList);

module.exports = router;
