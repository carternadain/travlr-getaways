const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars'); // Handlebars
const app = express();
const PORT = process.env.PORT || 3000;

// // --- Handlebars setup ---
// --- Handlebars setup ---
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// --- Static files ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Import routes ---
const travelerRoutes = require('./app_server/routes/travelerRoutes');
app.use('/', travelerRoutes); // register routes

// --- Start server ---
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

