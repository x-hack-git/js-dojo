import React from "react"
import Style from "./point.module.css"

export default function Point(props) {
	return (
		<div class={Style.box27}>
			<span class={Style.boxTitle}>{props.title}</span>
			<p>{props.text}</p>
		</div>
	)
}
