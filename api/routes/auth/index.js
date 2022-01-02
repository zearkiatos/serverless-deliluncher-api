const express = require("express");
const { StatusCodes } = require("http-status-codes");
const Users = require("../../models/Users");

const router = express.Router();

router.post("/register", async (request, response) => {
  response.send("I'm register")
});

router.post("/login", async (request, response) => {
  response.send("I'm login");
});



module.exports = router;
