const Router = require("express");
const { Admin, Course } = require("../DB");
const AdminMiddleware = require("../Middleware/admin");
const jwt = require("jsonwebtoken");
const jwtpassword = '121122';


const router = Router();




// signup for Admin
router.post("/signup",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.create({
        username: username,
        password: password
    }).then(()=>{
        res.send("Admin successfully Created")
    })
});




// Courses
router.post("/courses", AdminMiddleware,async(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.baseUrl.price;

   const courseId = await Course.create({
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        msg: "new course is cteated", courseId: courseId._id
    })

});

// get Coureses 
router.get("/courses",AdminMiddleware, async(req,res)=>{
    const response = await Course.find({})

    res.json({
        couses: response
    })
})


module.exports= router;