import { Link } from "react-router-dom"
import homeStyle from "../style/Home.module.css"

function Home() {
    return(
        <main className = {homeStyle.homeMain}>
            <h1>Tell a Story</h1>
            <div>
                <button className = {homeStyle.loginButton}><Link to="/login">Login</Link></button>
                <button className = {homeStyle.signupButton}><Link to="/signup">Sign Up</Link></button>
            </div>
        </main>
    )
}

export default Home