'use strict';
//const credential = require('credential');
//const pw = credential();
const _ = require('lodash');
//const pool = require('./../../config/db.config');
const pool =require("../../config/database");
//const bcrypt = require('bcrypt');
const {genSaltSync,hashSync,compareSync}=require("bcrypt");
const { generateJwtToken, genTokenAfterRegistration } = require('../helpers/jwt.helper');
// const {
//     getTodayDate
// } =require('../utils/dateUtils');  
//const { BASE_URL, PROFILE_UPLOAD_LOCATION, USER_QRCODE_LOCATION, KYC_DOC_LOCATION, SLIDER_UPLOAD_LOCATION } = require('../utils/constants');
const fs = require('fs');
const path = require('path');

//User object create
var User = function(user){
    this.id     = user.id;
    this.name    = user.name;
    this.empno    = user.empno;
    this.dept     = user.dept;
};

User.getUsers = function (result) {
    const sqlUserQuery=`SELECT * FROM employee`;
    pool.getConnection(function (err, connection) {
        connection.query(sqlUserQuery, function(err, response) {
            if (err) {
                connection.release();
                result(err, null);
            } else {
                if(response && typeof response != 'undefined' && _.size(response)>0) {
                    result(null, response);
                    connection.release();
                }
            }
        });
    });
};

module.exports= User;