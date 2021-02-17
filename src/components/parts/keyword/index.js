import React from "react"
import Style from "./keyword.module.css"

export default function Point(props) {
	return (
		<div class={Style.box26}>
			<span class={Style.boxTitle}>{props.title}</span>
			<p>{props.text}</p>
		</div>
	)
}
