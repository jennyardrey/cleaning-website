import React from 'react';
import './App.css';
import Navbar from "./Navbar";
import Main from "./Main";
import ContactForm from "./ContactForm";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Main />
			<ContactForm />
		</div>
	);
}

export default App;
