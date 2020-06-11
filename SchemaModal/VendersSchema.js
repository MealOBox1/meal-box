const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
  // venderID: {
  //   type: Number,
  //   unique: true,
  //   required: true
  // },
  title: {
    type: String,
    required: true,
  },
  KitchenName: {
    type: String,
    required: true,
  },
  veg: {
    type: Boolean,
    required: true,
  },
  meals: {
    type: String,
    required: true,
  },
  day: {
    type: String,
  },
  menu: {
    type: String,
    required: true,
  },
  registrationNo: {
    type: Number,
    unique: true,
  },
  venderName: {
    type: String,
  },

  description: {
    type: String,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

ItemSchema.pre(/^find/, function (next) {
  this.populate({
    path: " foodId",
  });
});

//module.exports = Item = mongoose.model("venders", ItemSchema);
//Create Instance
const AddVender = mongoose.model("VenderMeals", ItemSchema);

module.exports = AddVender;
