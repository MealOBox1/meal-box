const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
  UserID: {
    unique: true,
    type: Schema.Types.ObjectId,
    ref: "client",
    required: true,
  },
  name: {
    type: String,
    
  },
  landmark: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  pincode: {
    type: String,
  },
  type:{
    type: String,
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
