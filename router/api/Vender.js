const express = require("express");
const router = express.Router();
const mealController = require("../../controllers/MealController");

//Item model
const AddVender = require("../../SchemaModal/VendersSchema");

router.route("/").post(mealController.createVender);

module.exports = router;
