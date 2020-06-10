const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
  // UserID: {
  //   type: Number,
  //   unique: true,
  //   required: true
  // },
  name: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

//module.exports = Item = mongoose.model("venders", ItemSchema);
//Create Instance
const AddAddress = mongoose.model("UserAddress", ItemSchema);

module.exports = AddAddress;
