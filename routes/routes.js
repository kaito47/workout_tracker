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
                res.send(data);
            })
            .catch(err => {
                res.send(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        console.log(req.body);
        // db.Workout.create(body)
        //     .then(data => {
        //         res.json(data);
        //     })
        //     .catch(err => {
        //         res.status(400).json(err);
        //     });
    });

    // router.post("/api/transaction/bulk", ({ body }, res) => {
    //   Transaction.insertMany(body)
    //     .then(dbTransaction => {
    //       res.json(dbTransaction);
    //     })
    //     .catch(err => {
    //       res.status(400).json(err);
    //     });
    // });


};

