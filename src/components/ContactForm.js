import React from "react"
import "./../styles/ContactForm.scss"
import { Link } from "react-scroll";
var Scroll = require('react-scroll');

function ContactForm() {
	return (
		<div className="contact-form">
			<h1 className="contact-title">Interested?</h1>
			<p>If you think this sounds like something you are intersted in, get in touch below for a quote, or contact us on 0150 555 2345 for a chat.</p>
			<form id="contact">
				<label for="name">Name</label>
				<input type="text" id="name"></input>
				<label for="email">Email</label>
				<input type="text" id="email"></input>
				<label for="info">Information</label>
				<textarea name="info"></textarea>
			</form>
			<div className="nav-btns">
				<Link
					activeClass="active"
					to="main"
					spy={true}
					smooth={true}
					offset={0}
					duration={1000}
				>
					<button className="price-btn">Back to Main</button>
				</Link>
			</div>
		</div >
	)
}

export default ContactForm