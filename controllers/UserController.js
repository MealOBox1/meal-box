const AddAddress = require("../SchemaModal/UserAddress");
const Cart = require("../SchemaModal/Cart");
const catchAsync = require("../utils/catchAsync");

exports.PostAddress = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body);
  //const vender = await feature.query;
  const Address = await AddAddress.create(req.body);
  console.log("lpddddddddddppo");
  console.log(Address);
  //send response
  res.json(Address);
});

exports.GetAddress = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  // console.log(req.body);
  //const vender = await feature.query;
  const Address = await AddAddress.find({});
  console.log("lpddddddddddppo");
  console.log(Address);
  //send response
  res.json(Address);
});

exports.PostCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body);
  //const vender = await feature.query;
  if (req.body.days == 6) {
    req.body.price = 140;
  }

  const cart = await Cart.create(req.body);
  console.log("cartttt");
  console.log(cart);
  //send response
  res.json(cart);
});

exports.GetCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log("itemsCart");
  //const vender = await feature.query;
  const cart = await Cart.findById(req.params.id);
  console.log("cartttt");
  console.log(cart);
  //send response
  res.json(cart);
});

exports.UpdateCart = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.body, "jjijijijij");
  //const vender = await feature.query;
  const cart = await Cart.findOneAndUpdate(req.params.id, req.body);
  console.log("updatecartttt");
  console.log(cart);
  //send response
  res.json(cart);
});
