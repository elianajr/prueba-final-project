import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SeachBar } from "../component/searchBar.jsx";

import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	const surf = <img src="https://i.ibb.co/ssMzJnP/mdi-kitesurfing.png" alt="surf"/>
	const snorkel = <img src="https://i.ibb.co/JBVt1Tt/mdi-diving-snorkel.png" alt="snorkel"/>
	const kitesurf = <img src="https://i.ibb.co/GVKWPVT/map-surfing.png" alt="kitesurf"/>
	const diving = <img src="https://i.ibb.co/pfCWKG5/mdi-diving-helmet.png" alt="diving"/>


	return (
		<div className="home">
			<div className="home-topbody">
				<div className="home-topbody__sports">
					<button>{surf}SURF</button>
					<button>{snorkel}SNORKEL</button>
					<button>{kitesurf}KITESURF</button>
					<button>{diving}DIVING</button>
				</div>
			</div>
			<div className="home-bottonbody">
				<div className="home-bottonbody__services">
					<div className="home-bottonbody__services__forecast">
						<Link to="/forecast">
							<button className="btn btn-primary">Forecast</button>
						</Link>
					</div>
					<div className="home-bottonbody__services__hotSpot">
						<Link to="/hotspot">
							<button className="btn btn-primary">HotSpot</button>
						</Link>
					</div>
					<div className="home-bottonbody__services__photos"></div>
					<SeachBar/>
				</div>
			</div>
		</div>
	);
};

export default Home;