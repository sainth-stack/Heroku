const mongoose=require("mongoose")
const productSchema2=mongoose.Schema({
    name:{
        type:String,
       
        
    },
    sold:{
        type:String,
        
    },
    total:{
        type:String,
        
    }
})

const Bill=mongoose.model('bills',productSchema2)
module.exports=Bill;