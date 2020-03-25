import React from "react"
import "../styles/Main.css"
import image from "../images/cleaning.jpg"



const Header = (props) => {

	return (
		<div className="nav-bar">
			<div className="main-content">
				<img className="image" src={image} alt="Placeholder"
				/>
				<div className="information">
					<p>Spicy jalapeno bacon ipsum dolor amet deserunt buffalo veniam consequat, tenderloin drumstick minim esse quis. Consectetur brisket laborum, kielbasa aliqua chislic ground round deserunt chuck fugiat ut pork. Veniam hamburger nisi, swine doner pastrami irure proident deserunt ipsum culpa shoulder. Ad ut magna sausage pig turkey pariatur t-bone in sint sed cillum pork chop. Ipsum duis sed pork ribeye, est tongue venison.</p>

				</div>
				<button onClick={props.showPrice}>See Prices</button>
			</div>

		</div>
	)
}

export default Header