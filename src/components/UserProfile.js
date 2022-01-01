const UserProfile=(props)=>{
    const {UserDetails}=props
    const{name,sold,rs}=UserDetails
    return(
        <div className="wrap">
        <ul className="ul3">
            
                <li className="li1">{name}</li>
                <li className="li2">Rs.{rs}</li>

                <li className="">{sold}</li>
            
            
        </ul>
        </div>
    )
}
export default UserProfile