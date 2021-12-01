import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div></div>
	);
};

export default Home;