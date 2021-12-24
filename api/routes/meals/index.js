const express = require("express");
const { StatusCodes } = require("http-status-codes");
const Meals = require("../../models/Meals");
const app = express();
const router = app.router();

router.get("/", async (request, response) => {
  const meals = await Meals.find();

  meals && response.status(StatusCodes.OK).send(meals);
});

router.get("/:id", async (request, response) => {
  const { id } = request.params;
  const meal = await Meals.findById(id);

  meal && response.status(StatusCodes.OK).send(meal);
});

router.post("/", async (request, response) => {
  const { name, description } = request.body;
  const meal = await Meals.create({
    name,
    description,
  });

  meal && response.status(StatusCodes.CREATED).send(meal);
});

router.post("/", async (request, response) => {
  const { name, description } = request.body;
  const meal = await Meals.create({
    name,
    description,
  });

  meal && response.status(StatusCodes.CREATED).send(meal);
});

router.put("/:id", async (request, response) => {
  const { name, description } = request.body;
  const { id } = request.params;
  await Meals.findOneAndUpdate(id, {
    name,
    description,
  });

  response.sendStatus(StatusCodes.NO_CONTENT);
});

router.delete("/:id", async (request, response) => {
  const { id } = request.params;
  await Meals.findOneAndDelete(id);

  response.sendStatus(StatusCodes.NO_CONTENT);
});

module.exports = router;
