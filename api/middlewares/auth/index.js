const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const Users = require("../../models/Users");

const isAuthenticated = (request, response, next) => {
  const token = request.headers.authorization;

  if (!token) {
    return response.send(StatusCodes.FORBIDDEN);
  }

  jwt.verify(token, config.DELILUNCHER_SECRET, (error, decoded) => {
    const { _id } = decoded;

    Users.findOne({ _id })
      .exec()
      .then((user) => {
          request.user = user;
          next();
      });
  });
};

const hasRoles = roles => (request, response, next) => {
  if (roles.indexOf(request.user.role) > -1) {
    next();
  }

  response.sendStatus(StatusCodes.FORBIDDEN);
};

module.exports = { 
  isAuthenticated,
  hasRoles
};
