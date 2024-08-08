const express = require("express");
const router=express.Router();
const {usercontroller}=require("../controllers/user-controller");
const isLoggedin= require("../middlewares/isLoggedIn");


router.get('/', isLoggedin,usercontroller);



module.exports=router;