import { Link } from "react-router-dom"
import "../style.css"

export default function TopBar(){
    return(
    
        <div className="d-flex   nav" style={{ display: "flex", gap: "20px" }}>
        <h6>store</h6>
        <Link to='/login' className="buttom gotowebsite" style={{  }}>go to website</Link>
        </div>
        
    
    )
}