import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchBar } from "../component/searchBar.jsx";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";


import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	const surf = <img src="https://i.ibb.co/ssMzJnP/mdi-kitesurfing.png" alt="surf"/>
	const snorkel = <img src="https://i.ibb.co/JBVt1Tt/mdi-diving-snorkel.png" alt="snorkel"/>
	const kitesurf = <img src="https://i.ibb.co/GVKWPVT/map-surfing.png" alt="kitesurf"/>
	const diving = <img src="https://i.ibb.co/pfCWKG5/mdi-diving-helmet.png" alt="diving"/>


	return (
		
		<div className="home">
			<Navbar/>
				<div className="home-topbody">
					<div className="home-topbody__sports">
						<Link to="/surf">
							<button className="home-topbody__sports__buttons">{surf}SURF</button>
						</Link>
						<Link to="/snorkel">
							<button className="home-topbody__sports__buttons">{snorkel}SNORKEL</button>
						</Link>
						<Link to="/kitesurf">
							<button className="home-topbody__sports__buttons">{kitesurf}KITESURF</button>
						</Link>
						<Link to="/diving">
							<button className="home-topbody__sports__buttons">{diving}DIVING</button>
						</Link>
					</div>
				</div>
				<div className="home-bottonbody">
					<div className="home-bottonbody__services">
						<div className="home-bottonbody__services__forecast">
							<div className="home-bottonbody__services_button__left">
								<Link to="/forecast">
									<button className="buttonWTD_style">Forecast</button>
								</Link>
							</div>
							<div className="home-bottonbody__service_p">
								<p>Check-out weather conditions wherever you go and ensure the best contiditions for your activities. </p>
							</div>
						</div>
						<div className="home-bottonbody__services__hotSpot">
							<div className="home-bottonbody__service_p">
								<p>Find the best spots closest to you, or check nice places you want to discover on your adventure</p>
							</div>
							<div className="home-bottonbody__services_button__right">
								<Link to="/hotspot">
									<button className="buttonWTD_style">HotSpot</button>
								</Link>
							</div>
						</div>
						<div className="home-bottonbody__services__hotSpot">
							<div className="home-bottonbody__services_button__left">
								<Link to="/hotspot">
									<button className="buttonWTD_style">Photos</button>
								</Link>
							</div>
							<div className="home-bottonbody__service_p">
								<p>Do you like to share your adventure? Or know which species can you find? Or maybe share a nice sunset? This is your place!</p>
							</div>
						</div>
						<div className="home-bottonbody__services__photos"></div>
						<div className="home-bottonbody__services__searchbar"><SearchBar/></div>
					</div>
					<div className="home-bottonbody__newsBox"></div>
				</div>
			<Footer/>
		</div>
	);
};

export default Home;