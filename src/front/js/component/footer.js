import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss"
import Chatdropdown from "./chatdropdown.jsx";

export const Footer = () => { 

	const help = <img src="https://i.ibb.co/ncgFB3p/fluent-book-question-mark-24-regular.png"/>

	return (
		<footer className="footer mt-auto py-3 text-center">
			<div className="footer-help">
				<Link to="/help">
					<p className="footer-help__text">Need any help?</p>
					{help}
				</Link>
				<Chatdropdown></Chatdropdown>
				</div>
			
		</footer>
	)
};
