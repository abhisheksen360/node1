'user strict';

const mysql = require('mysql');

const pool = mysql.createPool({
   
    connectionLimit: 15,
    port: 3306,
    host     : 'localhost',
    user     : 'root',
    password : '',  
    database : 'employeedb'
});

module.exports = pool;
