import Layout from "../components/Layout"
import signUpStyle from "../style/Auth.module.css"

function SignUp(){
    return(
        <Layout>
            <h1 className = {signUpStyle.title}>Sign Up</h1>

            <form className = {signUpStyle.form} action="">
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    E-Mail:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>

                <button className = {signUpStyle.submitButton}>Submit</button>

            </form>
        </Layout>
    )
}

export default SignUp