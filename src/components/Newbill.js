import React, { useState } from 'react';
import Bill from './Bill';
import { Card } from 'react-bootstrap';
import {
    Provider as GridSystemProvider,
    Container, Row, Col,
    Visible, Hidden
} from '@trendmicro/react-grid-system';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-grid-system/dist/react-grid-system.css';
import Ready from './ready';
import axios from 'axios';
import UserProfile from './UserProfile';

const Newbill=(props)=>{
  const [data,setData]=useState({
    name:"",
    sold:"sold.20",
    rs:"",
  })


    function handle(e){
    
      const newdata={...data}
      newdata[e.target.name]=e.target.value
      setData(newdata)
    }




  const postdata=async(e)=>{

  e.preventDefault();
  if(data.name=="" || data.rs=="" || data.rs<=0){
    alert(" enter name and price correctly")
  }
  else{
axios.post("/api/products/getallproducts",data)
.then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err);
})

}
  }
  
  

    
    
  

  
    return(
        <div className='container1'>
          <Container>
          <Row>
          <Col md={9}>
  <Row>

    <Col md={6}>
  
    <Card className='card1'>
  <Card.Header className='heading'>New Bill</Card.Header>
  <Card.Body>
    <Card.Text>
     <Bill name={props.name} sold={props.sold} rs={data.rs}/>
    </Card.Text>
    
  </Card.Body>
</Card>
    </Col>
    <Col md={6}>
    <Card className='card2'>
  <Card.Header className='heading'>Items</Card.Header>
  <Card.Body>
    <Card.Text>
  <Ready/>
    </Card.Text>
  </Card.Body>
</Card>

    </Col>
    
  </Row>
  <Row>
    <Col md={6}>
    <Card className='card3'>
  <Card.Header className='heading'>My Bills</Card.Header>
  <Card.Body>
    <Card.Text>
    <ul className='ul1'>
        <li className='li1'>BILL0000123</li>
        <li className='li2'>Rs.140</li>

        <li>10/09/2020</li>
      </ul>
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col md={6}>
    <Card className='card4'>
  <Card.Header className='heading'>Sales</Card.Header>
  <Card.Body>
    <Card.Text>
    <ul className='ul5'>
      <li>Rs.2520</li>
      <li>Today</li>
    </ul>
    <ul className='ul5'>
      <li>Rs.2520</li>
      <li>Today</li>
    </ul>
    <ul className='ul5'>
      <li>Rs.2520</li>
      <li>Today</li>
    </ul>
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    
  
  
  

  </Row>
  </Col>
  <Col md={3}>
  <Card className='card5'>
  <Card.Header className='heading'>Add item</Card.Header>
  <Card.Body>
    <Card.Text>
    <form method="POST" onSubmit={postdata} action='/localhost:3000'>
    <input onChange={(e)=>handle(e)} type="text"className='input2'placeholder='Name'id="input2"value={data.name}name="name"/>
    <input onChange={(e)=>handle(e)} type="text"className='input2'placeholder='Price'id="input3"value={data.rs}name="rs"/>
    <button type="submit" className='btn2'onClick={() => window.location.reload(false)}>ADD</button> 
    </form>          
    </Card.Text>
  </Card.Body>
</Card>
  </Col>
  </Row>
</Container>
        </div>

    )
}
export default Newbill;