const Router = require("express");
const { Course, User } = require("../DB");
const UserMiddleware = require("../Middleware/user");


const router = Router();



/// UserSignup 
router.post("/signup",async(req, res)=>{
   User.create({
        username: req.body.username,
        password: req.body.password
    })

    res.json({
        msg: "Users Successfully Created"
    })
});


router.get("/courses",UserMiddleware, async(req,res)=>{
     res.json({
        msg: "User want Courses",
        course: await Course.find({})
     })
});


router.post("/courses/:courseId",UserMiddleware, async(req,res)=>{
    const username = req.headers.username;
    const courseId = req.params.courseId;

    await User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCouses: courseId
        }
    });

    res.json({
        msg: "Course purchased Successfully"
    })
});


router.get("/purchasedCourses",UserMiddleware, async(req, res)=>{
      const username = req.headers.username;

      const user = User.find({
        username:username
      });
  
      const courses = Course.find({
        _id: {
            "$in": user.purchasedCouses
        }
      })

      res.json({
        courses: courses
      })

})

module.exports = router;