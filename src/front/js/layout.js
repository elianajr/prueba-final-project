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
import injectContext from "./store/appContext";


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
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
