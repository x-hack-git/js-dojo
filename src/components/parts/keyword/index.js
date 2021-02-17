import React from "react"
import Style from "./keyword.module.css"

export default function Point(props) {
	return (
		<div className={Style.box26}>
			<span className={Style.boxTitle}>{props.title}</span>
			<p>{props.text}</p>
		</div>
	)
}
