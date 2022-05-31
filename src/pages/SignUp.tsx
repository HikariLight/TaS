import { useState, MouseEvent } from "react"
import Layout from "../components/Layout"
import signUpStyle from "../style/Auth.module.css"

function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmuit = async (e: MouseEvent) => {

        e.preventDefault();

        let userData = {
            username,
            email,
            password
        }

        const url = "http://127.0.0.1:3001/signup";
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
        }

        try {
            await fetch(url, options)
                .then((response) => response.json())
                .then((result) => { console.log(result) });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <h1 className={signUpStyle.title}>Sign Up</h1>

            <form className={signUpStyle.form} autoComplete="off">
                <label>
                    Username:
                    <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <label>
                    E-Mail:
                    <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>

                <button className={signUpStyle.submitButton} onClick={(e) => { handleSubmuit(e) }}>Submit</button>

            </form>
        </Layout>
    )
}

export default SignUp