// app_server/controllers/travelerController.js

// Controller for the home page
exports.homePage = (req, res) => {
    res.render('home', { // renders home.hbs from views/
        pageTitle: 'Welcome to Travlr',
        destinations: [
            { name: 'Paris', price: '$1000' },
            { name: 'Tokyo', price: '$1200' }
        ]
    });
};
