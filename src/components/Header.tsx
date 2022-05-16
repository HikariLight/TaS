import { Link } from "react-router-dom";
import headerStyle from '../style/Header.module.css'
// import '../style/Header.module.css'

function Header (){
    return(
        <header className = {headerStyle.header}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Header;