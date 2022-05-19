import Layout from "../components/Layout"
import aboutStyle from "../style/About.module.css"

function About(){
    return(
        <Layout>
            <h1 className = {aboutStyle.title}>About page</h1>
            <p>This is a platform for sharing stories.</p>
            <p>The fun part is that the users don't know what kind of story they'll get. Each post will be of a mystery type.</p>
            <p>The possible post types are: Short stories, Short horror stories and jokes.</p>
        </Layout>
    )
}

export default About