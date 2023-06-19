const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: Buffer,
      required: true,
    },
  },
  { timestamps: true }
);

const Advertisement = mongoose.model("Ad", adSchema);

module.exports = Advertisement;
