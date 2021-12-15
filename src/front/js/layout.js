import React, { Fragment } from "react";
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/home.js";
import HotSpot from "./pages/hotspot.jsx";
import Forecast from "./pages/forecast.jsx";
import injectContext from "./store/appContext";
import Login from "./component/login.js";
import Register from "./component/register.js";
import RegisterWaterdropper from "./component/registerWaterdropper";
import RegisterCenter from "./component/registerCenter";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
				
		<div>
			<BrowserRouter basename={basename}>
				
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/registerwaterdropper" element={<RegisterWaterdropper />} />
					<Route path="/registercenter" element={<RegisterCenter />} />
				</Routes>
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
