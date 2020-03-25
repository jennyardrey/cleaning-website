import React from "react"
import "../styles/Main.css"


const Prices = (props) => {
	return (
		<div className="prices">
			<h2>Prices</h2>
			<p>- Price example - £100</p>
			<p>- Price example - £100</p>
			<p>- Price example - £100</p>
			<button onClick={props.showInfo}>Back</button>

		</div>
	)
}

export default Prices

