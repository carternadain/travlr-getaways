const mongoose = require('mongoose');
const Trip = require('./travlr');
const fs = require('fs');
const path = require('path');

console.log('Starting seed script...');

// Read the trips.json file
const tripsFilePath = path.join(__dirname, '../data/trips.json');
console.log('Looking for trips.json at:', tripsFilePath);

let trips;
try {
    trips = JSON.parse(fs.readFileSync(tripsFilePath, 'utf8'));
    console.log('Successfully read trips.json');
    console.log('Number of trips found:', trips.length);
} catch (err) {
    console.error('Error reading trips.json:', err.message);
    process.exit(1);
}

// MongoDB connection string
const dbURI = 'mongodb://127.0.0.1/travlr';
console.log('Connecting to:', dbURI);

// Connect to MongoDB
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB successfully');
        return seedDatabase();
    })
    .then(() => {
        console.log('Database seeded successfully');
        console.log('Closing connection...');
        mongoose.connection.close();
        process.exit(0);
    })
    .catch(err => {
        console.error('Error occurred:', err.message);
        console.error('Full error:', err);
        mongoose.connection.close();
        process.exit(1);
    });

// Function to seed the database
async function seedDatabase() {
    try {
        console.log('Removing existing trips...');
        const deleteResult = await Trip.deleteMany({});
        console.log('Deleted', deleteResult.deletedCount, 'existing trips');

        console.log('Inserting new trips...');
        const insertResult = await Trip.insertMany(trips);
        console.log(`${insertResult.length} trips inserted successfully`);
        
        return insertResult;
    } catch (err) {
        console.error('Error in seedDatabase function:', err.message);
        throw err;
    }
}