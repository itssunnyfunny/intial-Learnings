const { Admin } = require("../DB");



// UserMiddleware
async function UserMiddleware(req,res,next) {
  const username=  req.headers.username;
  const password = req.headers.password;

 await Admin.findOne({
    username: username,
    password: password
  }).then((value)=>{
      if (value) {
        next();
      } else {
        res.json({
            msg: "User don't exists"
        })
      }
  })
};

module.exports = UserMiddleware;