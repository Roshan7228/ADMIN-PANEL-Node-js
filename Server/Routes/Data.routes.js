let express =require("express");
const { createdata } = require("../Controller/Data.controller");
const { auth } = require("../middlewares/auth.middleware");
const { logger } = require("../middlewares/logger.middleware");


let DataRoutes=express.Router();

DataRoutes.post("/add/hero",auth,logger,createdata);


module.exports=DataRoutes

