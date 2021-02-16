import React from "react";
import cardStyles from "./card.module.css"
import { Link } from "gatsby"

function MyLink(props) {
  const outerLink = props.url;
  if (outerLink.indexOf("id.js-dojo") > 0) {
    return <a href={props.url} target="_blank" rel="noreferrer">詳細を見る</a>;
  }
  return (<Link to={props.url} target="_blank" rel="noreferrer">詳細を見る</Link>);
}

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
          <MyLink url={props.url}/>
        </div>
      </div>
    </div>
  )
}