const express = require("express");
const router=express.Router();
const {homecontroller}=require("../controllers/index-controller");

router.get('/', homecontroller); 



module.exports=router;