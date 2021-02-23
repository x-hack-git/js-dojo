import React from "react"
import Style from "./point.module.css"

export default function Point(props) {

	const elements = props.text.split(" ")
	const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<p key={index}>{value}</p>)
  }

	return (
		<div className={Style.box27}>
			<span className={Style.boxTitle}>{props.title}</span>
			<p>{items}</p>
		</div>
	)
}
