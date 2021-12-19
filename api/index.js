const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config");

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.MONGO_DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('*', (request, response) => {
  response.send('Hi human 🤖');
});
module.exports = app
