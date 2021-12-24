const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");
const meals = require('./routes/meals');
const orders = require('./routes/orders');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.MONGO_DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/meals', meals);
app.use('/api/orders', orders);

module.exports = app
