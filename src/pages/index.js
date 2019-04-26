import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
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
