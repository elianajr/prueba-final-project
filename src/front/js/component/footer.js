import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss"

export const Footer = () => { 

	const help = <img src="https://i.ibb.co/ncgFB3p/fluent-book-question-mark-24-regular.png"/>

	return (
		<footer className="footer mt-auto py-3 text-center">
			<div className="footer-help">
				<Link to="/help">
					<p>Need any help?</p>
					{help}
				</Link>
				</div>
			<p>COMPONENTE CHAT</p>
		</footer>
	)
};
