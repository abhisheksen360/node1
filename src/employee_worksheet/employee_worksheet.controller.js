const {getEmployeeWorksheetHistory,searchEmployeeWorksheetHistory,getEmployeeWorksheetById,insertDailyUpdate,getEmployeeTodayWorksheet,updateEmployeeTodayWorksheet,deleteEmployeeTodayWorksheet}=require("./employee_worksheet.service");

module.exports={
    getEmployeeWorksheetHistory:(req,res)=>{
        const id=req.params.id;
        getEmployeeWorksheetHistory(id,(err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  code:1,
                  success:false,
                  message:"Something Went Wrong!Try Again!!",
                  data:[]
              })
           }
           else if(!results){
            return res.status(200).json({
                code:2,
                success:false,
                message:"No Record Found!",
                data:[]
            })
           }
           else{
            return res.status(200).json({
                code:3,
                success:true,
                data:results
            })  
           }
           
        });
    },
    searchEmployeeWorksheetHistory:(req,res)=>{
        searchEmployeeWorksheetHistory((err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  success:0,
                  message:err
              })
           }
           else if(!results){
            return res.status(200).json({
                success:0,
                message:"No Record Found!"
            })
           }
           else{
            return res.status(200).json({
                success:1,
                data:results
            })  
           }
           
        });
    },
    getEmployeeWorksheetById:(req,res)=>{
        const id=req.params.id;
        getEmployeeWorksheetById(id,(err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  code:1,
                  success:false,
                  message:"Something Went Wrong!!Try Again!!"
              })
           }
           else if(!results){
            return res.status(200).json({
                code:2,
                success:false,
                message:"No Record Found!",
                data:[]
            })
           }
           else{
            return res.status(200).json({
                code:3,
                success:true,
                data:results
            })  
           }
           
        });
    },
    insertDailyUpdate:(req,res)=>{
        const body=req.body;
        if((!body.project_name || body.project_name===null) || (!body.start_time || body.start_time===null) || (!body.end_time || body.end_time===null) || (!body.description || body.description===null) || (!body.user_id || body.user_id===null)  || (!body.status || body.status===null)){
               return res.status(200).json({
               code:1,
               success:false,
               message:"Please Provide All required Fields!!"
               })
        }
        else{
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        const created = yyyy + '-' + mm + '-' + dd;
        body.created=created;
        body.modified=created;
        insertDailyUpdate(body,(err,results)=>{
            if(err){
               return res.status(500).json({
                   code:2,
                   success:false,
                   message:"Something Went Wrong,Try Again!!"
               })
            }
            return res.status(200).json({
                code:3,
                success:true,
                message:"Data Has Been Successfully Inserted!"
               
            })
        });
        }
       
    },
    getEmployeeTodayWorksheet:(req,res)=>{
        const id=req.params.id;
        
        getEmployeeTodayWorksheet(id,(err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  code:1,
                  success:false,
                  message:"Something Went Wrong!Try Again!!",
                  data:[]
              })
           }
           else if(!results){
            return res.status(200).json({
                code:2,
                success:false,
                message:"No Record Found!",
                data:[]
            })
           }
           else{
            return res.status(200).json({
                code:3,
                success:true,
                data:results
            })  
           }
           
        });
    },
    updateEmployeeTodayWorksheet:(req,res)=>{
        const body=req.body;
        
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();

        const modified = yyyy + '-' + mm + '-' + dd;
        body.modified=modified;
        console.log(body);
        updateEmployeeTodayWorksheet(body,(err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  code:1,
                  success:false,
                  message:"Something Went Wrong!!"
              })
           }
           return res.status(200).json({
               code:2,
               success:true,
               message:"Data Has Been Successfully Updated"
           })
        });
    },
    deleteEmployeeTodayWorksheet:(req,res)=>{
        const body=req.body;
        body.is_deleted=1;
        deleteEmployeeTodayWorksheet(body,(err,results)=>{
           if(err){
               console.log(err);
              return res.status(500).json({
                  code:1,
                  success:false,
                  message:"Something Went Wrong!!"
              })
           }
           else if(!results){
                return res.status(200).json({
                code:2,
                success:false,
                message:"No Record Found!"
            })
           }
           else{
           return res.status(200).json({
               code:3,
               success:true,
               message:"Data Has Been Successfully Deleted!!"
           })
           }
        });
    },
}