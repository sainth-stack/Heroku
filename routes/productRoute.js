const express=require("express");
const router=express.Router();
const Product=require('../models/productModels');
router.post('/getallproducts',(req,res)=>{
console.log(req.body)
const newitem=new Product({
    name:req.body.name,
    sold:req.body.sold,
rs:req.body.rs

})
newitem.save();
})
router.get("/getallproducts",(req,res)=>{
    Product.find({},(err,docs)=>{
        if(!err){
            return res.send(docs);
        }
        else{
            return res.status(400).json({message:'Something went wrong'});
        }
    })
})
module.exports=router;