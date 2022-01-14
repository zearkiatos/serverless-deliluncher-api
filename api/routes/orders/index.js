const express = require("express");
const { StatusCodes } = require("http-status-codes");
const Orders = require("../../models/Orders");
const { isAuthenticated } = require("../../middlewares/auth");

const router = express.Router();

router.get("/", async (request, response) => {
  const orders = await Orders.find();

  response.status(StatusCodes.OK).send(orders);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const order = await Orders.findById(id);

  response.status(StatusCodes.OK).send(order);
});

router.post("/", isAuthenticated, async (request, response) => {
  const { _id } = request.user;
  const { mealId } = request.body;
  const order = await Orders.create({
    mealId,
    userId: _id
  });

  response.status(StatusCodes.CREATED).send(order);
});

router.put("/:id", isAuthenticated, async (request, response) => {
  const { mealId, userId } = request.body;
  const { id } = request.params;
  await Orders.findOneAndUpdate(id, {
    mealId,
    userId
  });

  response.sendStatus(StatusCodes.NO_CONTENT);
});

router.delete("/:id", isAuthenticated, async (request, response) => {
  const { id } = request.params;
  await Orders.findOneAndDelete(id);

  response.sendStatus(StatusCodes.NO_CONTENT);
});

module.exports = router;
