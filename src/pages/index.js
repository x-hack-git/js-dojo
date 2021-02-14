import React from "react"
import Container from "../components/container"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import MainCategory from "../components/main_category/index"
import Main from "../components/main_contents/index"

export default () => {
  return (
    <div>
      <Header />
      <Container>
        <MainCategory />
        <Main />
      </Container>
      <Footer />
    </div>
  )
}