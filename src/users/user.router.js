//const router =require("express").Router();
const express = require('express')
const router = express.Router()
const userController = require('./user.controller');
// const validations = require('../validation/user');
//  const auth = require('../middlewares/auth.middleware')

//jenkins demo
//test

router.get('/employee',userController.getUsers);



module.exports=router;