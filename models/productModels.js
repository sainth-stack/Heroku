const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type:String,
       
        
    },
    sold:{
        type:String,
        
    },
    rs:{
        type:String,
        
    }
})

const Product=mongoose.model('products',productSchema)
module.exports=Product;