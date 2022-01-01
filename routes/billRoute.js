const express=require("express");
const router=express.Router();
const Bill=require('../models/billsModel');
router.post('/getallbills',(req,res)=>{
    console.log(req.body)
    const newitem=new Bill({
        name:req.body.name,
        sold:req.body.sold,
    total:req.body.total
    
    })
    newitem.save();
    })

router.get("/getallbills",(req,res)=>{
    Bill.find({},(err,docs)=>{
        if(!err){
            return res.send(docs);
        }
        else{
            return res.status(400).json({message:'Something went wrong'});
        }
    })
})
module.exports=router;