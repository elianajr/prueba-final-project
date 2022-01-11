import React, { useState, useContext, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/navbar.scss";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import jwt_decode from "jwt-decode";



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const logo = <img src="https://i.ibb.co/WkjzmB3/LOGO.png"/>
	const token = localStorage.getItem("token");
	const [currentuser,setCurrentuser] = useState('')

  
    useEffect (async()=>{
        const decoded=(jwt_decode(localStorage.getItem('token')))
        await actions.getUser(decoded.sub.id)
    },[])

    useEffect(()=>{
        setCurrentuser(store.user)
    },[store.user])


	return (
		<nav className="navbar">
			<Link to="/">{logo}</Link>
			<div className="navbar__links"><Link to="/forecast" >FORECAST</Link ></div>
			<div className="navbar__links"><Link to="/news" >NEWS</Link ></div>
			<div className="navbar__links"><Link to="/aboutus" >ABOUT US</Link ></div>
			<div className="member">
				{ !token ? (
				<div>
					<p className="navbar-member">Are you a member?</p>
					<Link className="link-navbar-member" to="/register">
						<span>REGISTER</span>
					</Link> 
					<span> / </span>
					<Link className="link-navbar-member" to="/login">
						<span>LOG IN</span>
					</Link>
				</div>
				) : (
				<Fragment>
					<Nav>
						<NavDropdown
						id="nav-dropdown"
						title={
							<div className="profile-photo-waterdropper-navbar">
								<img src={currentuser.photo} alt="profile-photo" />
							</div>
						}
						>
						<NavDropdown.Item className="username-navbar">{currentuser.username}</NavDropdown.Item>
						<NavDropdown.Item>
						<Link className="link-navbar" to={`/profile/${currentuser.id}`}>Profile</Link >
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item>
							<Link className="link-navbar" to="/">
								<span onClick={() => actions.logout()}>Log out</span>
							</Link>
						</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Fragment>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
