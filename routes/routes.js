const app = require("express");
const db = require("../models");
const path = require("path");

module.exports = function (app) {
    app.get('/stats', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });

    app.get('/exercise', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });


    app.get('/api/workouts', (req, res) => {
        db.Workout.find()
            .then(data => {
                console.log(data);
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
        db.Workout.create(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body }, res) => {
        db.Workout.insertMany(body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.get('/api/workouts/range', (req, res) => {
        db.Workout.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });


};

