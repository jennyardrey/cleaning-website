import React from "react"
import "../styles/Information.scss"
import { Link } from "react-scroll";


const Header = (props) => {

	return (
		<div className="main-info">
			<div className="content">
				<h2>A deep cleaning service for schools and offices in the wake of the COVID-19 pandemic</h2>
				<p>Spicy jalapeno bacon ipsum dolor amet deserunt buffalo veniam consequat, tenderloin drumstick minim esse quis. Consectetur brisket laborum, kielbasa aliqua chislic ground round deserunt chuck fugiat ut pork. Veniam hamburger nisi, swine doner pastrami irure proident deserunt ipsum culpa shoulder. Ad ut magna sausage pig turkey pariatur t-bone in sint sed cillum pork chop. Ipsum duis sed pork ribeye, est tongue venison.</p>
			</div>

			<div className="nav-btns">
				<button className="price-btn" onClick={props.showPrice}>See Prices</button>
				<Link
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				><button className="quote-btn">Get a quote</button>
				</Link>
			</div>


		</div>
	)
}

export default Header