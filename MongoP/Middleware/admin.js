const { Admin } = require("../DB");

  

  // AdminMiddleware 
  async function AdminMiddleware(req, res, next) {
      const username = req.headers.username;
      const password = req.headers.password;

    await  Admin.findOne({
        username: username,
        password: password
      }).then((value)=>{
        if (value) {
            next()
        } else {
            res.json({
                msg: "user Doen't exists"
            })
        }
      })
   }

   module.exports = AdminMiddleware;