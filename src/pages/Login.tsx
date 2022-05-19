import Layout from "../components/Layout"
import loginStyle from "../style/Auth.module.css"

function SignUp(){
    return(
        <Layout>
            <h1 className = {loginStyle.title}>Login</h1>

            <form className = {loginStyle.form} action="">
                <label>
                    E-Mail:
                    <input type="text" name="email" />
                </label>
                <label>
                    Password:
                    <input type="text" name="password" />
                </label>

                <button className = {loginStyle.submitButton}>Submit</button>

            </form>
        </Layout>
    )
}

export default SignUp