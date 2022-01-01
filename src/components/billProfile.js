const BillProfile=(props)=>{
    const {BillsDetails}=props
    const{name,sold,total}=BillsDetails
    return(
        <div>
        <ul className='ul1'>
        <li className='li1'>{name}</li>
        <li className='li2'>Rs.{total}</li>
    
        <li>Quantity:{sold}</li>
      </ul>
    
      </div>
    )
}
export default BillProfile