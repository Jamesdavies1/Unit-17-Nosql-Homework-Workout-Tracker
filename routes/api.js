const router = require("express").Router();
const Workout = require("../models").Workout;

router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(workouts => res.json(workouts))
    .catch(err => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then(workout => res.json(workout))
    .catch(err => res.json(err));
});

//WIP new post req!!!
router.post("/api/workouts", (req, res) => {
  console.log("i have been hit");
  Workout.create({})
    .then(newWorkout => {
      res.json(newWorkout);
    })
    .catch(err => res.json(err));
});

//get req
// router.route("/api/workouts").get((req, res) => {
//   return workouts;
// });

module.exports = router;
