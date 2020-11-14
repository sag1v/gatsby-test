import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/react-elastic-carousel"
import styled from "styled-components"

const items = [1, 2, 3, 4, 5]

const Item = styled.div`
  background-color: green;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 0 10px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Carousel>
      {items.map(item => (
        <Item key={item}>{item}</Item>
      ))}
    </Carousel>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
