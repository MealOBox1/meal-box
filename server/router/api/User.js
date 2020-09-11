const express = require("express");
require("express-group-routes");
const router = express.Router(); 
const auth=require("../../middelware/auth")

const UserController = require("../../controllers/UserController");

router.group("/", (route) => {
  route.post("/register",UserController.UserRegister);
  route.get("/login",UserController.Login);
  route.get("/verify",UserController.Verify);
  route.get("/auth",auth,UserController.Auth);

  route.get("/cart/:id", UserController.GetCart);
  route.patch("/cart/:id/address", UserController.UpdateCart);
  route.post("/cart", UserController.PostCart);

  route.post("/PostAddress", UserController.PostAddress);
  route.get("/Addresses/:id", UserController.GetAddress);
  route.put("/UpdateAddress/:id", UserController.UpdateAddress);
  route.post("/order",UserController.Order)
  route.get("/GetOrder",UserController.GetOrders)
  route.patch("/UpdateOrder/:id",UserController.UpdateOrder)
});

module.exports = router;
