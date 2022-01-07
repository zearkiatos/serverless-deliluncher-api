const express = require("express");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const Users = require("../../models/Users");
const config = require("../../config");
const { isAuthenticated } = require("../../middlewares/auth");

const router = express.Router();
const ITERATIONS = 1000;
const KEYLEN = 64;

const signToken = (_id) => {
  return jwt.sign(
    {
      _id
    },
    config.DELILUNCHER_SECRET,
    {
      expiresIn: config.EXPIRATION_TOKEN
    }
  );
};

router.post("/register", async (request, response) => {
  const { email, password } = request.body;
  crypto.randomBytes(16, (error, salt) => {
    const saltStringify = salt.toString("base64");

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
  const { email, password } = request.body;
  Users.findOne({ email })
    .exec()
    .then((user) => {
      !user && response.send("User or password wrong");
      crypto.pbkdf2(
        password,
        user.salt,
        ITERATIONS,
        KEYLEN,
        "sha1",
        (error, key) => {
          const encryptedPassword = key.toString("base64");
          if (user.password === encryptedPassword) {
            const token = signToken(user._id);
            return response.send({ token });
          }

          return response.send("User or password wrong");
        }
      );
    });
});

router.get("/me", isAuthenticated, (request, response) => {
  response.send(request.user);
});

module.exports = router;
