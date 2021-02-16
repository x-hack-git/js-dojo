import React from "react";
import cardStyles from "./blogCard.module.css"

export default function blogCard(props) {
  return (
    <div className={cardStyles.card}>
      <a href={props.url}>
        <div className={cardStyles.cardHeader}>
          <img src="https://webcreatorbox.com/sample/images/bear.jpg" className={cardStyles.cardImg} alt="" />
        </div>
      </a>
      <div className={cardStyles.cardContent}>
        <h1 className={cardStyles.cardTitle}>{props.title}</h1>
        <p className={cardStyles.cardText}>{props.text}</p>
      </div>
      <div className={cardStyles.cardLink}>
        <a href={props.url}>続きを読む</a>
      </div>
    </div>
  )
}