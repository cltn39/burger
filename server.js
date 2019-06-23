//Dependencies
const express = require('express');

// EXpress Set up
const app = express();
const PORT = process.env.PORT || 8080;

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller");

app.use(routes);

// Static directory
app.use(express.static("public"));

// Syncing our sequelize models and then starting our Express app
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log(`Server listening on: ${PORT}`);
});