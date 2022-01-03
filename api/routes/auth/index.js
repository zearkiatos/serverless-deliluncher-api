const express = require("express");
const { StatusCodes } = require("http-status-codes");
const crypto = require("crypto");
const Users = require("../../models/Users");

const router = express.Router();

router.post("/register", async (request, response) => {
  const { email, password } = request.body;
  crypto.randomBytes(16, (error, salt) => {
    const saltStringify = salt.toString("base64");
    const ITERATIONS = 1000;
    const KEYLEN = 64;

    crypto.pbkdf2(
      password,
      saltStringify,
      ITERATIONS,
      KEYLEN,
      "sha1",
      (error, key) => {
        const passwordEncrypted = key.toString("base64");
        Users.findOne({ email })
          .exec()
          .then((user) => {
            user && response.send("The user exist");

            Users.create({
              email,
              password: passwordEncrypted,
              salt: saltStringify
            }).then(() => {
              response.send("The user was created successfuly");
            });
          });
      }
    );
  });
});

router.post("/login", async (request, response) => {
  response.send("I'm login");
});

module.exports = router;
