import React from "react";
import mainStyles from "./main.module.css"
import Blog from "../blogCard/index"
// import Sidebar from "../sidebar/index"

export default function mainContents() {
  return (
    <div className={mainStyles.container}>
      <div>
        <div className="">
          <h1>WEB開発塾とは？</h1>
          <p>
            Web開発塾は、少数精鋭のJavaScript特化型のスクールです。
          </p>
          <p>
            JavaScriptをカリキュラムの中心に据えて、Web開発に必要な実践的知識を「Webアプリの開発を通じて」身につけることを目的にしています。
          </p>
          <p>
            プログラミング言語の文法やツールの使い方を単に覚えるのではなく、「現実の問題を解くために必要なスキル」を身につけることが可能。
          </p>
        </div>
        <Blog
          title="なぜ、JavaScriptに特化して教えているのか？"
          text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
          url=""
        />
        <Blog
          title="「作りながら学ぶ」スタイルが、スキルを身に付けるために最適な理由"
          text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
          url=""
        />
        <Blog
          title="プログラミングが「楽しい」を超えて、やめたいのにやめられないほど面白くなる！"
          text="ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。ゲームを作りながら学ぶWeb開発塾とは少数精鋭のJavaScript特化型スクールです。"
          url=""
        />
      </div>

      {/* 一旦非表示 */}
      {/* <Sidebar /> */}
    </div>
  )
}