import React from "react"
import { Link } from "gatsby"
// import Layout from "../components/layout"

export default () => (
  <footer>
    {/* <link>株式会社X-HACK</small>  */}
    <Link to={"/"}>トップページへのリンク</Link>
    <a href={"/second/"}>Secondページへのリンク</a>
    <small>利用規約</small> 
    <small>プライバシー・ポリシー</small>
  </footer>
)