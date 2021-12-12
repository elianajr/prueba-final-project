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
import { AboutUs } from "./pages/aboutus.jsx";
import { Surf } from "./pages/surf.jsx";
import { Kitesurf } from "./pages/kitesurf.jsx";
import { Snorkel } from "./pages/snorkel.jsx";
import { Scuba } from "./pages/scuba.jsx";


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
			</Routes>
		</BrowserRouter>
	);
};

export default injectContext(Layout);
