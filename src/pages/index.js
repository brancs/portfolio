import * as React from "react"
import Layout from "../components/Layout/Layout"
import Sections from "../components/Sections/Sections"

const IndexPage = () => {
  return (
    <Layout>
      <Sections/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {
  return (
    <>
    <title>Vitor Brancalião | Portifólio</title>
      <link href="./static/favicon-light.png" rel="icon" media="(prefers-color-scheme: light)"/>
    <link href="./static/favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)" />
    </>
  )
}
