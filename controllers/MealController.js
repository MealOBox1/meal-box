const AddVender = require("../SchemaModal/VendersSchema");
const mealgetclass = require("../utils/mealgetClass");
const catchAsync = require("../utils/catchAsync");

// exports.mealPost = catchAsync(async (req, res, next) => {
//   console.log(req.body);
//   const vender = await AddVender.create(req.body);
//   res.status(200).json(vender);
// });

exports.GetMeal = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.query);
  //const vender = await feature.query;
  const vender = await AddVender.find(req.query);
  console.log("lpddddddddddppo");
  console.log(vender);
  //send response
  res.json(vender);
});

exports.Food = catchAsync(async (req, res, next) => {
  //let feature = new mealgetclass(AddVender.find(), req.query).fittler();
  //   query = query.sort(req.query.sort);
  //   query = query.select(req.query.fields);
  console.log(req.params.id);
  //const vender = await feature.query;
  const vender = await AddVender.findById(req.params.id);
  console.log("l");
  console.log(vender);
  //send response
  res.json(vender);
});

exports.createVender = catchAsync(async (req, res, next) => {
  const vender = await AddVender.create(req.body);
  res.status(201).json(vender);
});
