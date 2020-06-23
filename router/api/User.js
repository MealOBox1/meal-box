const express = require("express");
require("express-group-routes");
const router = express.Router();

const UserController = require("../../controllers/UserController");

router.group("/", (route) => {
  route.get("/cart/:id", UserController.GetCart);
  route.patch("/cart/:id/address", UserController.UpdateCart);
  route.post("/cart", UserController.PostCart);

  route.post("/PostAddress", UserController.PostAddress);
  route.get("/Addresses", UserController.GetAddress);
});

module.exports = router;
