const mongoose=require("mongoose");
var mongoDBURL='mongodb+srv://Sai_12345:Sai_12345@cluster0.ucdww.mongodb.net/mern-ecommerce'
mongoose.connect(mongoDBURL,{useUnifiedTopology:true,useNewUrlParser:true})
var dbconnect=mongoose.connection
dbconnect.on('error',()=>{
    console.log("mongo db connection fail")
})
dbconnect.on('connected',()=>{
    console.log("Mongodb connection success")

})
module.exports=mongoose