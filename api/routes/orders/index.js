const express = require("express");
const { StatusCodes } = require("http-status-codes");
const Orders = require("../../models/Orders");
const app = express();
const router = app.router();

router.get("/", async (request, response) => {
  const orders = await Orders.find();

  orders && response.status(StatusCodes.OK).send(orders);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const order = await Orders.findById(id);

  order && response.status(StatusCodes.OK).send(order);
});

router.post("/", async (request, response) => {
  const { name, description } = request.body;
  const order = await Orders.create({
    name,
    description,
  });

  order && response.status(StatusCodes.CREATED).send(order);
});

router.post("/", async (request, response) => {
  const { name, description } = request.body;
  const order = await Orders.create({
    name,
    description,
  });

  order && response.status(StatusCodes.CREATED).send(order);
});

router.put("/:id", async (request, response) => {
  const { name, description } = request.body;
  const { id } = request.params;
  await Orders.findOneAndUpdate(id, {
    name,
    description,
  });

  response.sendStatus(StatusCodes.NO_CONTENT);
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  await Orders.findOneAndDelete(id);

  response.sendStatus(StatusCodes.NO_CONTENT);
});

module.exports = router;
