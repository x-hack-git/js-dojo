import React from "react"
import Container from "../components/container"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Card from "../components/card/index"
import Main from "../components/main_contents/index"
import styles from "./about-css-modules.module.css"

export default function About() {
  return (
    <div>
      <Header />
      <Container>
        <div className={styles.cardContents}>
          <Card
            title="WEB開発塾"
            text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
            url=""
          />
          <Card
            title="JavaScript道場"
            text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
            url=""
          />
          <Card
            title="参加者ポートフォリオ"
            text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
            url=""
          />
        </div>
        <Main />
      </Container>
      <Footer />
    </div>
  )
}