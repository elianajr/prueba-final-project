import React from "react";
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Navbar from "./component/navbar.js";
import Landingpage from "./component/Landingpage.jsx";
import Home from "./pages/home.js";
import HotSpot from "./pages/hotspot.jsx";
import Forecast from "./pages/forecast.jsx";
import injectContext from "./store/appContext";
import { AboutUs } from "./pages/aboutus.jsx";
import Login from "./component/login.js";
import Register from "./component/register.js";
import RegisterWaterdropper from "./component/registerWaterdropper.js";
import RegisterCenter from "./component/registerCenter.js";
import EditProfileWaterdropper from "./component/editProfileWaterdropper.js";
import EditProfileCenter from "./component/editProfileCenter.js";
import Profile from "./component/profile.js";
import DeleteProfile from "./component/deleteProfile.js";


import Upload from "./component/upload.jsx";
import Uploadingphotos from "./pages/uploadingphotos.jsx";
import RegisterWaterdropper from "./component/registerWaterdropper.js";
import RegisterCenter from "./component/registerCenter.js";
import ChatForm from "./component/ChatForm.jsx"
import Chatdropdown from "./component/Chatdropdown.jsx"
import Newsview from "./pages/Newsview.jsx";
import Newsdetail from "./component/Newsdetails.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
	
		<BrowserRouter className="index">
			<Navbar></Navbar>
			<Routes>
				<Route path="/" element={<Landingpage />} />
				<Route path="/hotspot" element={<HotSpot />} />
				<Route path="/forecast" element={<Forecast />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/registerwaterdropper" element={<RegisterWaterdropper />} />
				<Route path="/registercenter" element={<RegisterCenter />} />
				<Route path="/photo" element={<Uploadingphotos></Uploadingphotos>}></Route>	
				<Route path="/news" element={<Newsview />} />
				<Route path="/newsdetail" element={<Newsdetail />} />		
				<Route path="/chat" element={<ChatForm />} />
				<Route path="/home" element={<Home></Home>}></Route>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/register-waterdropper" element={<RegisterWaterdropper />} />
				<Route path="/register-center" element={<RegisterCenter />} />
				<Route path="/profile/:id" element={<Profile />} />
				<Route path="/profile-waterdropper" element={<EditProfileWaterdropper />} />
				<Route path="/profile-center" element={<EditProfileCenter />} /> 
				<Route path="/delete-profile" element={<DeleteProfile />} /> 
			</Routes>	
	
		</BrowserRouter>
		
	);
};

export default injectContext(Layout);

