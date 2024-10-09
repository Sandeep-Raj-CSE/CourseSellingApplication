const mongoose = require("mongoose")


// there are two method
// this will return promise
//mongoose.connect("mongodb+srv://sandy:805135Bhai@namastenodejs.cnbpp.mongodb.net/databse name")



// 

const connectDB = async () =>{
    await  mongoose.connect(
        "mongodb+srv://sandy:805135Bhai@namastenodejs.cnbpp.mongodb.net/DevTinder"
    );
};


module.exports = connectDB;


