var fs = require('fs');
var path = require('path');

// Controller for the home page
exports.homePage = (req, res) => {
    res.render('home', {
        pageTitle: 'Welcome to Travlr',
        destinations: [
            { name: 'Paris', price: '$1000' },
            { name: 'Tokyo', price: '$1200' }
        ]
    });
};

// Controller for the travel page
exports.travelList = (req, res) => {
    const trips = JSON.parse(fs.readFileSync('./app_server/data/trips.json', 'utf8'));
    res.render('travel', { 
        title: 'Travlr Getaways',
        trips: trips 
    });
};