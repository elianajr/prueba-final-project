import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const logo = <img src="https://i.ibb.co/WkjzmB3/LOGO.png"/>
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
					<span>Join/</span><span>Sing in</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
