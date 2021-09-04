const express = require("express");
const mongoose = require("mongoose");
const routes = require('./controllers');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

mongoose.connect('mongodb://localhost:27017/workout', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => console.log('Connected to db successfully'))
    .catch(e => console.log(e));



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });