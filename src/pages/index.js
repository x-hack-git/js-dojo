import React from "react"
import Container from "../components/container"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Card from "../components/card/index"
import Main from "../components/main_contents/index"
import styles from "./styles.module.css"

export default function About() {
  return (
    <div>
      <Header />
      <Container>
        <div className={styles.cardContents}>
          <Card
            title="JavaScript道場"
            text="JavaScriptの基本を課題を解きながら一ヶ月間かけてしっかり学習します。Slackで個別に質問が可能です。"
            url="javascript_basics"
            image="http://webcreatorbox.com/sample/images/bear.jpg"
            alt="JavaScript道場の画像"
          />
          <Card
            title="WEB開発塾"
            text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
            url="https://id.js-dojo.com/"
            image="http://webcreatorbox.com/sample/images/bear.jpg"
            alt="WEB開発塾の画像"
          />
          <Card
            title="参加者ポートフォリオ"
            text="Web開発塾の参加者が作成した作品をアーカイブしています。サンプルコードも確認できるます。"
            url="portfolios"
            image="http://webcreatorbox.com/sample/images/bear.jpg"
            alt="参加者ポートフォリオの画像"
          />
        </div>
        <Main />
      </Container>
      <Footer />
    </div>
  )
}