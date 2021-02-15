import React from "react"
// import { Link } from "gatsby"
// import Layout from "../components/layout"
import styles from "./mainVisual.module.css"

export default (props) => (
  <div>
    <div className={styles.container}>
      <div className={styles.innerItem}>
        <img src={props.url} alt="" style={{ width: `100%` }} />
      </div>
    </div>
  </div>
)