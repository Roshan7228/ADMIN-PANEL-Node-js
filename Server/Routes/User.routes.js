let express =require("express");
const { signupuser } = require("../Controller/User.controller");

let UserRoutes=express.Router();


UserRoutes.post("/Signup",signupuser)


module.exports=UserRoutes