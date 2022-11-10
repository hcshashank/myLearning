const ex = require("express");
const { route } = require("express/lib/application");
const Course = require("../models/course");
const router = ex.Router();

//creating the routers

// get all courses
router.get("/courses", async (req, res) => {
  try {
    console.log(req.query);
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.json(error);
  }
});

//get single courses
router.get("/courses/:courseId", async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.query);
    const c = await Course.findOne({ _id: req.params.courseId });
    if (c) {
      res.json({
        msg: "success",
        c,
      });
    } else {
      res.json({ msg: "Not Found"})
    }
  } catch (error) {
    res.json(error);
  }
});

// router.get("/courses", async (req, res) => {
//   try {
//     console.log(req.query)
//     const c = await Course.findOne({ _id: req.query.id });
//     if(c)
//     {
//     res.json({
//       msg: "success",
//       c
//     });
//   }else{
//     res.status(403).json("error")
//   }
//   } catch (error) {
//     res.json(error);
//   }
// });

// create courses

router.post("/courses", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (error) {
    res.json(error);
  }
});

router.delete("/courses/:courseId", async (req, res) => {
  try {
    const c = await Course.findByIdAndDelete({ _id: req.params.courseId });
    if (c) {
      res.json({ msg: "deleted successfully", c });
    } else {
      res.json("error");
    }
  } catch (error) {
    res.json(error);
  }
});

router.put("/courses/:courseId", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      { _id: req.params.courseId },
      req.body
    );
    res.json({ msg: "update successfully" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
