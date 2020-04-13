import React from "react"
import "../styles/Prices.scss"
import { Link } from "react-scroll";

const Prices = (props) => {
	return (
		<div className="main-prices">
			<div className="prices-content">
				<h2>Prices</h2>
				<p>- Price example - £100</p>
				<p>- Price example - £100</p>
				<p>- Price example - £100</p>
			</div>

			<div className="nav-btns">
				<button className="price-btn" onClick={props.showInfo}>Back</button>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				>
					<button className="quote-btn">Get a quote</button>
				</Link>
			</div>
		</div>
	)
}

export default Prices

