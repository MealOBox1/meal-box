const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  foodId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  days: {
    type: String,
    required: true,
  },
});


const Cart = mongoose.model("Cart", ItemSchema);

module.exports = Cart;
