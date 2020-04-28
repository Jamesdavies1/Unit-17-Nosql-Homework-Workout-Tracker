const mongoose = require("mongoose");

const schema = mongoose.schema;
const workoutSchema = new schema({
  name: { type: String, required: true },
  workout: { type: Array }
});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;
