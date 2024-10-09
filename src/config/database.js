const mongoose = require("mongoose")


// there are two method
// this will return promise
//mongoose.connect("mongodb+srv://sandy:805135Bhai@namastenodejs.cnbpp.mongodb.net/")



const connectDB = async () =>{
    await  mongoose.connect(
        "mongodb+srv://sandy:805135Bhai@namastenodejs.cnbpp.mongodb.net/"
    );
};



connectDB().then(()=> {
    console.log("Database connection stablished")
}).catch(()=>{
    console.log("Not Connection happend")
})