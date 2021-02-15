import React from "react"
import Container from "../components/container"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import MainCategory from "../components/main_category/index"
import MainContents from "../components/main_contents/index"

export default () => {
  return (
    <div>
      <Header />
      <Container>
        <MainCategory />
        <MainContents />
      </Container>
      <Footer />
    </div>
  )
}