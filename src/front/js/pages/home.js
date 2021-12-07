import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SeachBar } from "../component/searchBar.jsx";

import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="home-topbody">
				<div className="home-topbody__sports"></div>
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