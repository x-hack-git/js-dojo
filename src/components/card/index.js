import React from "react";
import cardStyles from "./card.module.css"
import { Link } from "gatsby"

export default function Card(props) {
  return (
    <div>
      <div className={cardStyles.card}>
        <img src={props.image} className={cardStyles.cardImg} alt={props.alt} />
        <div className={cardStyles.cardContent}>
          <h1 className={cardStyles.cardTitle}>{ props.title }</h1>
          <p className={cardStyles.cardText}>{props.text}</p>
        </div>
        <div className={cardStyles.cardLink}>
          {/* <Link to={props.url}>詳細を見る</Link> */}
          <a href={props.url} target="_blank">詳細を見る</a>
        </div>
      </div>
    </div>
  )
}