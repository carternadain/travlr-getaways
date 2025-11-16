// app_server/controllers/travel.js
var fs = require('fs');

const travelList = (req, res) => {
  const trips = JSON.parse(
    fs.readFileSync('./data/trips.json', 'utf8')
  );

  res.render('travel', {
    title: 'Travel',
    trips
  });
};

module.exports = {
  travelList
};
