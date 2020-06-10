const express = require("express");
require("express-group-routes");
const router = express.Router();
const MealController = require("../../controllers/MealController");

//Vender list modal

const AddVender = require("../../SchemaModal/VendersSchema");

//router.route("/").get(MealController.GetMeal);
//router.route("/").get(MealController.Food);
//router.get("/", MealController.Food);

router.group("/", (route) => {
  route.get("/:id", MealController.Food);
  router.get("/", MealController.GetMeal);
});

module.exports = router;
