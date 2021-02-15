import React from "react"
import Styles from "./column.module.css"
// import { useStaticQuery, graphql, Link } from "gatsby"

export default props => {
  return (
    <div className={Styles.column}>
      <h3>豆知識</h3>
      <p>{props.title}</p>
    </div>
  );
}