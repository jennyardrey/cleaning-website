import React, { Component } from "react"
import "../styles/Main.css"
import arrow from "../images/arrow.png"
import { Link } from "react-scroll";
import Information from "../components/Information"
import Prices from "../components/Prices"


class Main extends Component {
	constructor() {
		super();
		this.state = {
			prices: false
		}
	}

	showPrice = () => {
		this.setState({
			prices: true
		})
	}
	showInfo = () => {
		this.setState({
			prices: false
		})
	}
	render() {
		return (
			<div className="main">
				{this.state.prices === false ? <Information showPrice={this.showPrice} /> : <Prices showInfo={this.showInfo} />}

				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				>
					<img id="scroll-down" src={arrow} alt="scroll arrow" />
				</Link>
			</div>
		)
	}
}

export default Main