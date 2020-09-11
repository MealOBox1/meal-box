const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
});

// ItemSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "userId",
//   });
// });

module.exports = Item = mongoose.model("client", ItemSchema);
