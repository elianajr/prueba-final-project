import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from "./component/login.js";
import Register from "./component/register.js";
import RegisterWaterdropper from "./component/registerWaterdropper.js";
import RegisterCenter from "./component/registerCenter.js";
import EditProfileWaterdropper from "./component/editProfileWaterdropper.js";
import EditProfileCenter from "./component/editProfileCenter.js";
import Profile from "./component/profile.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/register-waterdropper" element={<RegisterWaterdropper />} />
					<Route path="/register-center" element={<RegisterCenter />} />
					<Route path="/profile/:id" element={<Profile />} />
					<Route path="/profile-waterdropper/:id" element={<EditProfileWaterdropper />} />
					<Route path="/profile-center" element={<EditProfileCenter />} />
				</Routes>
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
