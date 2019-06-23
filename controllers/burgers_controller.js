//dependencies
const express = require('express');
const app = express.Router();

//Import models
const burger = require("../models/burger.js");

//Routes
app.get("/", (req, res) => {
    burger.all((data) => {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

app.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name"
    ], [
        req.body.burger_name
    ], (result) => {
        res.json({
            id: result.insertId
        });
    });
});

app.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update({
        devoured: true
    }, condition, (result) => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

app.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export to server.js
module.exports = app;