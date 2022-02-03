const {getEmployeeWorksheetHistory,searchEmployeeWorksheetHistory,getEmployeeWorksheetById,insertDailyUpdate,getEmployeeTodayWorksheet,updateEmployeeTodayWorksheet,deleteEmployeeTodayWorksheet}=require("./employee_worksheet.controller");
const router =require("express").Router();

router.get("/employee-worksheet-history/:id",getEmployeeWorksheetHistory);
router.get("/fetch-employee-worksheet/:id",getEmployeeWorksheetById);
router.post("/search-employee-worksheet",searchEmployeeWorksheetHistory);
router.put("/insert-employee-daily-update",insertDailyUpdate);
router.get("/employee-today-worksheet/:id",getEmployeeTodayWorksheet);
router.post("/update-employee-today-worksheet",updateEmployeeTodayWorksheet);

router.delete("/delete-employee-today-worksheet",deleteEmployeeTodayWorksheet);


module.exports=router;