import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./main.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Front-end developer" />
    <p className="me">Hi, I'm Nina Nomen 🙋‍</p>
    <p className="description">
      UI designer and front-end developer based in Barcelona. CSS enthusiast and JavaScript lover. Clean code 👩‍💻, beautiful design 🎨 and web performance 🚀.
      I like to build projects that grant some value.
    </p>
  </Layout>
)

export default IndexPage
