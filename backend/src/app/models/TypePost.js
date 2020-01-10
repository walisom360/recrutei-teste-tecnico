const mongoose = require("mongoose");

const TypePostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("TypePost", TypePostSchema);
