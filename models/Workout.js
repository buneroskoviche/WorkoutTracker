const { model, Schema } = require('mongoose');

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: {
        type: Array,
        default: [],
    }
});

const Workout = model("Workout", workoutSchema);

module.exports = Workout;