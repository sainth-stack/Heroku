import UserProfile from "./UserProfile"
import axios from 'axios'
import { useEffect,useState } from "react"

const Ready=()=>{
    const [UserDetailsList,setList]=useState([])
useEffect(()=>{
    axios.get('api/products/getallproducts').then(res=>{
        setList(res.data)
    }).catch(err=>{
        console.log(err)
    })
},[])

    return(
        <div>
            <ul className="">
            {
                UserDetailsList.map(eachItem=>(
                   <UserProfile UserDetails={eachItem}/> 
                ))
            }
            </ul>
        </div>
    )
}
export default Ready;