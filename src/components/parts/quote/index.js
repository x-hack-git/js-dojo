import React from "react"
import Style from "./quote.module.css"

export default function Point(props) {
	const elements = props.text.split(" ")
	const items = []

  for (const [index, value] of elements.entries()) {
    items.push(<p key={index}>{value}</p>)
  }

	return (
		<blockquote className={Style.emphasis}>
			{items}
		</blockquote>
	)
}
