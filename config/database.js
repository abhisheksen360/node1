'user strict';
// const mysql=require("mysql");
//const mysql=require("oracledb");
//const { createPool }=require("mysql");
// const pool=mysql.createPool({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.MYSQL_DB,
//     //connectionString: "(DESCRIPTION=(CONNECT_DATA=(SERVICE_NAME=))(ADDRESS=(PROTOCOL=tcp)(HOST=127.0.0.1)(PORT=1521)))",
//     connectionLimit: 15
// })
const oracledb = require('oracledb');
const connection= oracledb.getConnection({ user: "C##USER", password: "123456", connectionString: "(DESCRIPTION=(CONNECT_DATA=(SERVICE_NAME=))(ADDRESS=(PROTOCOL=tcp)(HOST=127.0.0.1)(PORT=1521)))"});
console.log("success");
console.log(connection);

async function run() {

    let connection;
  
    try {
  
      connection = await oracledb.getConnection({ user: "C##USER", password: "123456", connectionString: "(DESCRIPTION=(CONNECT_DATA=(SERVICE_NAME=))(ADDRESS=(PROTOCOL=tcp)(HOST=127.0.0.1)(PORT=1521)))"});
  
      console.log("Successfully connected to Oracle Database");
  
      // Create a table
  
      await connection.execute(`begin
                                  select *  from employee;
                                  exception when others then if sqlcode <> -942 then raise; end if;
                                end;`);
  
  
  
      connection.commit();
  
      // Now query the rows back
  
      result = await connection.execute(
        `select description, done from todoitem`,
        [],
        { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });
  
      const rs = result.resultSet;
      let row;
  
      while ((row = await rs.getRow())) {
        if (row.DONE)
          console.log(row.DESCRIPTION, "is done");
        else
          console.log(row.DESCRIPTION, "is NOT done");
      }
  
      await rs.close();
  
    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
  
  run();
 module.exports=connection;


 