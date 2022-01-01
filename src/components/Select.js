import React, {useState, useEffect } from 'react';
import "./style.css";
import Newbill from './Newbill';
import axios from 'axios'
var item1;


const Item=()=>{

 
  
    const [billdata,setBill]=useState({
        name:"",
        total:"",
        sold:"",
        
      })



    const [itemsList1,setItems1]=useState([])
    useEffect(()=>{
        axios.get('api/products/getallproducts').then(res=>{
            setItems1(res.data);
        }).catch(err=>{
            console.log(err)})
    
    },[])
    const list=itemsList1.map((item)=>{
       switch(billdata.name){
        case item.name:return item1=item.rs;
        default:return "";
      }
    })




    function handle(e){
    
        const newdata={...billdata}
        newdata[e.target.name]=e.target.value
        setBill(newdata)
      }

    const [itemsList,setItems]=useState([])
    useEffect(()=>{
        axios.get('api/products/getallproducts').then(res=>{
            setItems(res.data);
        }).catch(err=>{
            console.log(err)})

    },[])
    const billGenerate=(e)=>{
        e.preventDefault();
        if(billdata.name=="" || billdata.sold==""){
          alert("enter valid details")
        }
        else{
        billdata.total=item1*billdata.sold;
       console.log(billdata.total)
        axios.post("/api/products/getallbills",billdata)
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err);
    })
    
  }
        }
        
  
    
    return(
        <div>
        <form method="POST" onSubmit={billGenerate}>

        <div className='selectitem'>
                 <label for="cars"><h2 className='selectheading'>Select item</h2></label>

    
    <div>

    <select className='item'onChange={(e)=>handle(e)} name="name" value={billdata.name}>
    {
                itemsList.map(eachItem=>(
                 
                     <option>{eachItem.name}</option>
                 
                ))
            }
            </select>
    </div> <br></br>
         <input type="number" name="sold" id="num1"placeholder="Quantity"className='input1'onChange={(e)=>handle(e)}value={billdata.sold}/><br></br>
         <button type="submit" className='btn1'onClick={() => window.location.reload(false)}>ADD</button>           
       
        </div>
        </form>
        <Newbill />

        </div>
        

    )
}
export default Item;