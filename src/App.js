import React from 'react';
import './App.css';
import Header from "././components/Header";
import Main from "./components/Main";
import ContactForm from "./components/ContactForm"

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<ContactForm />
		</div>
	);
}

export default App;
