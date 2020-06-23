const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  foodid: {
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
  Address: {
    type: Schema.Types.ObjectId,
    ref: "UserAddress",
  },
});
ItemSchema.pre(/^find/, function (next) {
  this.populate({
    path: " foodid",
  });
  next();
});
ItemSchema.post("save", function (doc, next) {
  doc
    .populate(" foodid")
    .execPopulate()
    .then(function () {
      next();
    });
});

const Cart = mongoose.model("Cart", ItemSchema);

module.exports = Cart;
