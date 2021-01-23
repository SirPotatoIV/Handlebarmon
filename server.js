let express = require('express');

let app = express();
let PORT = process.env.PORT || 8080;

// Import all models
let db = require('./models');

// Add middleware to Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize handlebars
let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
// let routes = require("./controllers/trainerController.js")

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
  });
});
