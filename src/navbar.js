import Navbar from "./Navbar.css"
function navbar(){
    return(
        <div className="navbar">
            <span className="name">
               
            </span>

            <div className="links">
                <a href="/"className="link">Home</a>
                <a href="/About" className="link">About</a>
                <a href="/Contact" className="link">Contact</a>
            </div>
        </div>
    )
}
export default navbar 
