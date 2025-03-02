const mongoose = require("mongoose");

const menuItemsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuItemsSchema);
module.exports = Menu;
