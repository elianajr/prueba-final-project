import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import WDS_logo from "../../img/WDS_logo.png"



export const Navbar = () => {
	return (
		<nav className="navbar">
			<img src={WDS_logo}/>
			<div className="navbar_links" onClick={()=>{}}><span>PROFILE</span></div>
			<div className="navbar_links" onClick={()=>{}}><span>FORECAST</span></div>
			<div className="navbar_links" onClick={()=>{}}><span>NEWS</span></div>
			<div className="navbar_links" onClick={()=>{}}><span>ABOUT US</span></div>
			<div className="member">
				<p>Are you a member?</p>
				<div>
					<span>Join/</span><span>Sing in</span>
				</div>
			</div>
		</nav>
	);
};
