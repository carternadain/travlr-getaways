const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /trips - returns list of all trips
const tripsList = async (req, res) => {
    const trips = await Trip
        .find({})
        .exec();
    
    if (!trips) {
        return res
            .status(404)
            .json({"message": "trips not found"});
    } else {
        return res
            .status(200)
            .json(trips);
    }
};

// GET: /trips/:tripCode - returns a single trip
const tripsFindCode = async (req, res) => {
    const trip = await Trip
        .find({'code': req.params.tripCode})
        .exec();
    
    if (!trip) {
        return res
            .status(404)
            .json({"message": "trip not found"});
    } else {
        return res
            .status(200)
            .json(trip);
    }
};

module.exports = {
    tripsList,
    tripsFindCode
};