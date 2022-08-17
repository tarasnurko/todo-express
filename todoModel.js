const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A title must have a name"],
      maxlength: [60, "A title must have less or equal then 60 characters"],
      minlength: [6, "A title must have more or equal then 10 characters"],
    },
    description: {
      type: String,
      required: [true, "A description must have a description"],
      maxlength: [
        500,
        "A description must have less or equal then 500 characters",
      ],
      minlength: [
        10,
        "A description must have more or equal then 10 characters",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    difficulty: {
      type: String,
      required: [true, "A ToDo must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either: easy, medium, difficult",
      },
    },
    important: {
      type: Boolean,
      default: false,
    },
    finished: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
