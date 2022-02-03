require("dotenv").config();
const express=require("express");
const app=express();
var cors = require('cors')
const userRouter=require("./src/users/user.router");
const employeeWorksheetRouter=require("./src/employee_worksheet/employee_worksheet.router");

// app.get("/",(req,res)=>{
//   res.send("Hello World");
// })
const jwt=require("jsonwebtoken");
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json());

app.use("/",userRouter);

app.use(cors());


// app.listen(3001,()=>{
//     console.log("backend is running on port 3001");
// })
app.listen(process.env.APP_PORT,()=>{
    console.log("backend is running on port 3001");
})

