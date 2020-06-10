const AddAddress = require("../SchemaModal/UserAddress");
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
