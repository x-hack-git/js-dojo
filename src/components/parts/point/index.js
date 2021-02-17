import React from "react"
import Style from "./point.module.css"

export default function Point(props) {
	return (
		<div className={Style.box27}>
			<span className={Style.boxTitle}>{props.title}</span>
			<p>{props.text}</p>
		</div>
	)
}
