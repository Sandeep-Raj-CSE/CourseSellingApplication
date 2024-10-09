const express = require("express");
const { adminAuth } = require("./utils/middleware/adminauth");

const User = require("./src/Model/user.js")

const app = express();


app.use(express.json())

// // // app.get("/user" , (req, res , next)=>{
// // //     console.log("2nd Handler will be called")

// // //     res.send("Hii from 2nd handler")

// // // })
// // app.use("/user", (req,res,next)=>{
// //     console.log("Print user in console")
// //   //  res.send("Hello Response");

// //     next();
// //     // res.send("Hello Response");

// // // },(req,res,next)=>{
// // //     console.log("Print user in console by 2nd")
// // //    // res.send("Hello Response by 2nd by  ");

// // //    next();

// // // },(req,res,next)=>{
// // //     console.log("Print user in console")
// // //    // res.send("Hello Response");

// // //     next();
// // //     // res.send("Hello Response");

// // // },(req,res,next)=>{
// // //     console.log("Print user in console")
// // //     res.send("Hello Response from 4th");

// // //     //next();
// // //     // res.send("Hello Response");

// // // }
// // })




// //console.log(AdminAuth)
// app.use("/isAdmin", adminAuth)

// app.get("/isAdmin/data" , (req, res , next) => {

//     // but i need to check he is admin or not so what can we do
//     // write a logic for that

//    // const token =  req.body?.token

//    res.send("AllData is send")
    
// })


// app.get("/isAdmin/data/deleteData" , (req, res , next) => {

//     // but i need to check he is admin or not so what can we do
//     // write a logic for that

//     res.send("AllData is Deleted")
// })



// Lec - databe

const connectDB = require("./src/config/database.js")


app.post("/signup", async (req, res)=> {
    // const userObj = {
    //     firstName:"sanu",
    //     lastName :"Bhaiya",
    //     emailId:"sanubhaiya@gmail.com",
    //     password:"Bhai"
    // }
    
  

  // creating the new instance of user  
  // we can directly pass the object also 
   
    const user = new User(req.body);

    console.log(user)

   await user.save();

   


   res.send("User add successfully")



})


// find the user by id

app.get("/user" , async (req , res) => {

    const userEmail = req.body.emailId;


    try {

        const user = await User.findOne({ emailId:userEmail })

        if(user.length === 0){
            res.status(404).send("BKL Phele tu Register to kar ")
        }
    
        res.send(user);
        
    } catch (error) {
        res.status(400).send("Email Not found")
        
    }

    






})


// sabka naam bata bhavdwe

app.get("/alluser" , async (req , res)=> {
    const allusers = await User.find({});

    res.send(allusers);
})


// kisi gandu ko hata

app.delete("/deleteuser" , async (req , res) => {

    const userId= req.body.userId;

    

    const user =  await User.findByIdAndDelete({_id:userId});

    res.send("User Delete successfully")
})


connectDB().then(()=> {
    console.log("Database connection stablished")
    app.listen(7777 , (req,res)=>{
        console.log("Server is Running")
    })
}).catch(()=>{
    console.log("Not Connection happend")
})

