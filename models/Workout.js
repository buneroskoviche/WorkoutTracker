const { model, Schema } = require('mongoose');

const workoutSchema = new Schema({
    day: Date,
    exercises: Array,
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;