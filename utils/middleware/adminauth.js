const adminAuth = (req , res , next)=> {
    console.log("Admin Authentication checking");

    const token = "Xyz"

   const isAdmin = token === "Xyz";

   if(isAdmin){
    next();

   }else{
    res.status(401).send("Unauthorized aadmi ")
   }


}


module.exports = {
    adminAuth,
}