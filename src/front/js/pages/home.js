import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.scss";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div><div className="ml-auto">
		<Link to="/hotspot">
			<button className="btn btn-primary">HotSpot</button>
		</Link>
	</div></div>
	);
};

export default Home;