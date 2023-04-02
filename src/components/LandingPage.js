import { Link } from "react-router-dom";

function LandingPage() {
    const users = [
        {name:"user1", color:"red"},
        {name:"user2", color:"blue"},
        {name:"user3", color:"green"},
        {name:"user4", color:"pink"}
    ]
    return (
        <div className="user-container">
            {users.map(u => <Link to="/catalog" style={{textDecoration: "none"}}><div className="user" style={{backgroundColor:u.color, color: "white"}}>{u.name}</div></Link>)}
        </div>
    )
    
}   
export default LandingPage;