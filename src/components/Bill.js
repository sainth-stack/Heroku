import axios from "axios";
import BillProfile from "./billProfile";
import { useEffect,useState } from "react";
var count=0;
let total1=0;
const Bill=(props)=>{


  const [UserBilList,setBills]=useState([])
useEffect(()=>{
    axios.get('api/products/getallbills').then(res=>{
        setBills(res.data)
        
    }).catch(err=>{
        console.log(err)
    })
},[])
count=0;
total1=0;
UserBilList.map((eachItem)=>{
 
  count=count+1
  total1=total1+Number(eachItem.total)
})
console.log(count,total1)


  return(
    <div>
    <ul className="">
    {
        UserBilList.map(eachItem=>(
           <BillProfile BillsDetails={eachItem}/> 
           
        ))
    }
    </ul>
    <nav className=' ul2 navbar navbar-dark navbar-fixed-bottom'>
        <li className='li3'>Amount:Rs.{total1}</li>
        <li className='li4'>Total items:{count}</li>
    
      </nav>
</div>
  )
}
export default Bill;