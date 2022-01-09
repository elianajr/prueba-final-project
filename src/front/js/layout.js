import React, { Fragment } from "react";
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Navbar from "./component/navbar.js";
import Home from "./pages/home.js";
import HotSpot from "./pages/hotspot.jsx";
import Forecast from "./pages/forecast.jsx";
import injectContext from "./store/appContext";
import { AboutUs } from "./pages/aboutus.jsx";
import { Surf } from "./pages/surf.jsx";
import { Kitesurf } from "./pages/kitesurf.jsx";
import { Snorkel } from "./pages/snorkel.jsx";
import { Scuba } from "./pages/scuba.jsx";
import Login from "./component/login.js";
import Register from "./component/register.js";
import RegisterWaterdropper from "./component/registerWaterdropper.js";
import RegisterCenter from "./component/registerCenter.js";
import EditProfileWaterdropper from "./component/editProfileWaterdropper.js";
import EditProfileCenter from "./component/editProfileCenter.js";
import Profile from "./pages/profile.js";
import DeleteProfile from "./component/deleteProfile.js";

import Upload from "./component/upload.jsx";
import Uploadingphotos from "./pages/uploadingphotos.jsx";
import ChatForm from "./component/chatForm.jsx"
import Chatdropdown from "./component/chatdropdown.jsx"
import Newsview from "./pages/newsview.jsx";
import Newsdetail from "./component/newsdetails.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
	
		<BrowserRouter className="index">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/hotspot" element={<HotSpot />} />
				<Route path="/forecast" element={<Forecast />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/surf" element={<Surf/>}/>
				<Route path="/kitesurf" element={<Kitesurf/>}/>
				<Route path="/snorkel" element={<Snorkel/>}/>
				<Route path="/diving" element={<Scuba/>}/>
				<Route path="/news" element={<Newsview />} />
				<Route path="/newsdetail" element={<Newsdetail />} />		
				<Route path="/chat" element={<ChatForm />} />
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

