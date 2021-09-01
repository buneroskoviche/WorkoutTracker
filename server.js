const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/workoutTracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to db successfully'))
    .catch(e => console.log(e));

app.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/exercise.html'));
    } catch (e) {
        res.json(e);
    }
});

app.get('/stats', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '/public/exercise.html'));
    } catch (e) {
        res.json(e);
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });