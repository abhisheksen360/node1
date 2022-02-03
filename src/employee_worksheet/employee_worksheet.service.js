const pool =require("../../config/database");

module.exports={
    getEmployeeWorksheetHistory:(id,callBack)=>{
      pool.query(
          `select * from employee_worksheet where is_deleted=0 AND user_id=?`,
          [id],
          (error,results,fields)=>{
              if (error){
                  console.log(error);
                  return callBack(error);
              }
              return callBack(null,results);

          }
          )
     },
     searchEmployeeWorksheetHistory:(id,callBack)=>{
        pool.query(
            `select * from user where id=?`,
            [id],
            (error,results,fields)=>{
                if (error){
                    console.log(error);
                    return callBack(error);
                }
                return callBack(null,results[0]);
   
            }
            )
     },
     getEmployeeWorksheetById:(id,callBack)=>{
        pool.query(
            `select * from employee_worksheet where is_deleted=0 AND id=?`,
            [id],
            (error,results,fields)=>{
                if (error){
                    console.log(error);
                    return callBack(error);
                }
                return callBack(null,results[0]);
   
            }
            )
     },
     insertDailyUpdate:(data,callBack)=>{
        pool.query(
            `insert into employee_worksheet(user_id,project_name,start_time,end_time,description,status,created,modified) values (?,?,?,?,?,?,?,?)`,
            [
               data.user_id,
               data.project_name,
               data.start_time,
               data.end_time,
               data.description,
               data.status,
               data.created,
               data.modified
            ],
            (error,results,fields)=>{
              if(error){
                  return callBack(error);
              }
              return callBack(null,results)
            }
        );
    },
    getEmployeeTodayWorksheet:(id,callBack)=>{
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        const created = yyyy + '-' + mm + '-' + dd;
        
        pool.query(
            `select * from employee_worksheet where is_deleted=0 AND created=? AND user_id=?`,
            [
            
            created,
            id
            ],
            (error,results,fields)=>{
                if (error){
                    console.log(error);
                    return callBack(error);
                }
                return callBack(null,results);
  
            }
            )
       },
    updateEmployeeTodayWorksheet:(data,callBack)=>{
        pool.query(
            `update  employee_worksheet set project_name=?,start_time=?,end_time=?,description=?,status=?,modified=? where id=? `,
            [
               data.project_name,
               data.start_time,
               data.end_time,
               data.description,
               data.status,
               data.modified,
               data.id
            ],
            (error,results,fields)=>{
              if(error){
                  return callBack(error);
              }
              return callBack(null,results[0])
            }
        );
     },
     deleteEmployeeTodayWorksheet:(data,callBack)=>{
        pool.query(
            `update  employee_worksheet set is_deleted=? where id=?`,
            [
               data.is_deleted,
               data.id
            ],
            (error,results,fields)=>{
              if(error){
                  return callBack(error);
              }
              return callBack(null,results)
            }
        );
     },
}