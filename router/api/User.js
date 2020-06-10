const express = require("express");
require("express-group-routes");
const router = express.Router();

const UserController = require("../../controllers/UserController");

router.group("/", (route) => {
  // route.get("/:id", MealController.Food);
  route.post("/PostAddress", UserController.PostAddress);
  route.get("/Addresses", UserController.GetAddress);
});

module.exports = router;
