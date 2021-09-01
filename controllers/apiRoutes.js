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

module.exports = router;