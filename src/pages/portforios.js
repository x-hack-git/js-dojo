import React from "react"
import Container from "../components/container"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Main from "../components/main_contents/index"

export default function About() {
  return (
    <div>
      <Header />
      <Container>
        <Main />
      </Container>
      <Footer />
    </div>
  )
}