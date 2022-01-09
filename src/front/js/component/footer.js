import React, { Component, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.scss"
import Chatdropdown from "./chatdropdown.jsx";
import { Context } from "../store/appContext";

export const Footer = () => { 
	const { store, actions } = useContext(Context);

	const help = <img src="https://i.ibb.co/ncgFB3p/fluent-book-question-mark-24-regular.png"/>


	return (
		<footer className="footer mt-auto py-3 text-center">
			<div className="footer-help">
				<Link to="/help">
					<p className="footer-help__text">Need any help?</p>
					{help}
				</Link>
				{/* {actions.verifylogin()==true?<Chatdropdown/>:''} */}
				</div>
			
		</footer>
	)
};
