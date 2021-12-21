import React, { useContext }  from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
				<div className="ml-auto">
					<span>Are you a member?</span>
					<Link to="/register">
						<button className="btn btn-primary">Register</button>
					</Link> 
					{ !store.loggedUser ? (
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link> 
					) : (
					<Link to="/">
						<button onClick={() => actions.logout()} className="btn btn-primary">Log out</button>
					</Link>
					)}
				</div>
			</div>
		</nav>
	);
};
