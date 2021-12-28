import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let params = useParams();
	const logo = <img src="https://i.ibb.co/WkjzmB3/LOGO.png"/>

	

	useEffect(() => {
        const myId = store.loggedUser.id;
        console.log(store.loggedUser.id);
	}, [store.currentUser]);

	return (
		<nav className="navbar">
			<Link to="/">{logo}</Link>
			<div className="navbar__links"><Link to="/profile">PROFILE</Link ></div>
			<div className="navbar__links"><Link to="/forecast" >FORECAST</Link ></div>
			<div className="navbar__links"><Link to="/news" >NEWS</Link ></div>
			<div className="navbar__links"><Link to="/aboutus" >ABOUT US</Link ></div>
			<div className="member">
				<p>Are you a member?</p>
				<div>
				<Link to="/register">
						<span>Register / </span>
				</Link> 
				{ !store.loggedUser ? (
				<Link to="/login">
					<span>Log in</span>
				</Link> 
				) : (
				<Link to="/">
					<span onClick={() => actions.logout()}>Log out</span>
				</Link>
				)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
