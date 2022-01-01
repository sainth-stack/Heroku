const express=require('express');
const app=express();
const path=require("path");

const bodyParser=require('body-parser');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
var dbconnection=require('./db')
var productRoutes=require('./routes/productRoute')
var billRoutes=require('./routes/billRoute')
app.use('/api/products/',productRoutes);
app.use('/api/products/',billRoutes);

app.get("/",(req,res)=>{
    res.send("this is from backend");
})


//server production
__dirname=path.resolve();
if(process.env.NODE_ENV !== "production"){
    app.use(express.static(path.join("build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'build','index.html'))
    })
}

app.listen(process.env.PORT || 5000,()=>console.log('server started'));