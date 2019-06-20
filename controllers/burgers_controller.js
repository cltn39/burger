//dependencies
const express = require('express');
const app = express.Router();

//Import models
const burger = require('../models/burger');

//Routes
app.get("/", (req,res) => {
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
        'name', 'sleepy'
    ], [
        req.body.name, req.body.sleepy
    ], (result) => {
        res.json({ id: result.insertId});
    });
});

app.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    burger.update({
        sleepy: req.body.sleepy}, condition, (result) => {
            if (result.changedRows ==0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

app.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.delete(condition, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export to server.js
module.exports = app;