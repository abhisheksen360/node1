'use strict';
const {
    userLogin,fetchProfile,
    getIdentityProofDropdownValues,
    create,
    checkEmail,
    checkPhone,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    changePassword,
    checkPassword}=require("./user.service");
const {genSaltSync,hashSync,compareSync}=require("bcrypt");
const jwt=require("jsonwebtoken");
const config=require("../../config/config");
// const {
//      SMS_GATEWAY, 
//      SMS_GATEWAY_ACCESS_TOKEN, 
//      FCM_SERVER_KEY, 
//      PAYMENT_GATEWAY, 
//      AGREEPAY_SALT, 
//      AGREEPAY_API_KEY,
//      API_BASE_URL 
//     } = require('../utils/constants');
// const {
//     getTodayDate
// } =require('../utils/dateUtils');  

const User = require('./user.service');

const nodemailer = require('nodemailer');
const _ = require('lodash');
const pool =require("../../config/database");



exports.getUsers = function(req, res) {
    User.getUsers(function(err, user) {
        console.log("218",user);
        if (err) {
            res.status(500).json({
                code:1,
                success:false,
                message:err
            })
        } else {
             res.status(200).json({
                code:2,
                success:true,
                //message:"User Has Been Successfully Added!",
                data:user
            })
        }
    });
};





 
    


