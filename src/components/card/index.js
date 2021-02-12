import React from "react";
import cardStyles from "./card.module.css"

export default function Card(props) {
  return (
    <div>
      <div className={cardStyles.card}>
        <img src="http://webcreatorbox.com/sample/images/bear.jpg" className={cardStyles.cardImg} alt="" />
        <div className={cardStyles.cardContent}>
          <h1 className={cardStyles.cardTitle}>{ props.title }</h1>
          <p className={cardStyles.cardText}>{props.text}</p>
        </div>
        <div className={cardStyles.cardLink}>
          <a href={props.url}>詳細を見る</a>
        </div>
      </div>
    </div>
  )
}