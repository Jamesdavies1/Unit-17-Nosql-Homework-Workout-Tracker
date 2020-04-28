const mongoose = require("mongoose");

const schema = mongoose.schema;
const exerciseSchema = new schema({
  exercise: { type: String, required: true },
  reps: { type: Number },
  sets: { type: Number },
  weight: { type: Number },
  minutes: { type: Number }
});

const Exercises = mongoose.model("Exercises", exerciseSchema);

module.exports = Exercises;
