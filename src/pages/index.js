import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `ecommerce`]} />
    <Home/>
    
  </Layout>
)

export default IndexPage
