import React from "react"
import Style from "./preparation.module.css"

export default function Point(props) {
	return (
		<blockquote class={Style.emphasis}>
			<p>CSS Block Quotation Examples</p>
			<p>ここに引用する文を書きます。</p>
		</blockquote>
	)
}
