const express = require("express");
const { adminAuth } = require("./utils/middleware/adminauth");

const app = express();

// // app.get("/user" , (req, res , next)=>{
// //     console.log("2nd Handler will be called")

// //     res.send("Hii from 2nd handler")

// // })
// app.use("/user", (req,res,next)=>{
//     console.log("Print user in console")
//   //  res.send("Hello Response");

//     next();
//     // res.send("Hello Response");

// // },(req,res,next)=>{
// //     console.log("Print user in console by 2nd")
// //    // res.send("Hello Response by 2nd by  ");

// //    next();

// // },(req,res,next)=>{
// //     console.log("Print user in console")
// //    // res.send("Hello Response");

// //     next();
// //     // res.send("Hello Response");

// // },(req,res,next)=>{
// //     console.log("Print user in console")
// //     res.send("Hello Response from 4th");

// //     //next();
// //     // res.send("Hello Response");

// // }
// })




//console.log(AdminAuth)
app.use("/isAdmin", adminAuth)

app.get("/isAdmin/data" , (req, res , next) => {

    // but i need to check he is admin or not so what can we do
    // write a logic for that

   // const token =  req.body?.token

   res.send("AllData is send")
    
})


app.get("/isAdmin/data/deleteData" , (req, res , next) => {

    // but i need to check he is admin or not so what can we do
    // write a logic for that

    res.send("AllData is Deleted")
})


app.listen(7777 , (req,res)=>{
    console.log("Server is Running")
})