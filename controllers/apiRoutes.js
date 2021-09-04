const router = require('express').Router();
const {Workout} = require('../models');

router.get('/workouts', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.post('/workouts', async (req, res) => {
    try {
        const newWorkout = new Workout();
        await newWorkout.save();
        res.status(200).json(newWorkout);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.put('/workouts/:id', async (req, res) => {
    try {
        const workoutToAdd = await Workout.findByIdAndUpdate(req.params.id, {
            $addToSet: { exercises: [req.body] }
        });
        res.status(200).json(workoutToAdd);
    } catch (e) {
        res.status(500).json(e);
    }
});

router.get('/workouts/range', async (req, res) => {
    try {
        const workoutRange = await Workout.aggregate([
            {$addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }}
        ]);
        console.log(workoutRange);
        res.status(200).json(workoutRange);
    } catch (e) {
        res.status(500).json(e);
    }
});

module.exports = router;