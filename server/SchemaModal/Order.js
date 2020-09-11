const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: "VenderMeals",
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status:{
    type:String
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: "UserAddress",
    required: true,
  },
});
ItemSchema.pre(/^find/, function (next) {
  this.populate({
    path: " food",
  });
  next();
});
ItemSchema.post("save", function (doc, next) {
  doc
    .populate(" food")
    .execPopulate()
    .then(function () {
      next();
    });
});

const Order = mongoose.model("Order", ItemSchema);

module.exports = Order;
