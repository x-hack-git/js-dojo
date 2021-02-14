import React from "react"
import Container from "../../../components/container"
import Header from "../../../components/header/header"
import Footer from "../../../components/footer/footer"

export default ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </div>
  )
}