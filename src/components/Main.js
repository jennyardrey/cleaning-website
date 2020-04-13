import React, { Component } from "react"
import "../styles/Main.scss"
// import arrow from "../images/arrow.png"
import Header from "./Header";
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
				<div className="title"><h1>Here is a title</h1></div>
				<div className="main-content">
					{this.state.prices === false ? <Information showPrice={this.showPrice} /> : <Prices showInfo={this.showInfo} />}
				</div>
			</div>
		)
	}
}

export default Main