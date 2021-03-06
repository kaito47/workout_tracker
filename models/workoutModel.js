const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        weight: {
            type: String,
            required: false,
        },
        reps: {
            type: Number,
            required: false,
        },
        sets: {
            type: Number,
            required: false,
        },
    });

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [exerciseSchema],
});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
