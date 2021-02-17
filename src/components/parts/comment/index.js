import React from "react"
import Style from "./comment.module.css"

export default function Point(props) {
	return (
		<div class={Style.box24}>
			<p>{props.text}</p>
		</div>
	)
}
