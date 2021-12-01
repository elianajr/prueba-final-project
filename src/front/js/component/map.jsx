import React, { useContext } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Context } from "../store/appContext";
import Markers from "./markers.jsx";

const Map = () =>{
    const { store, actions } = useContext(Context);


	return (
		<MapContainer center={{lat:"36.69607184118358",lng: "-4.443754371312125"}} zoom={520} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
                maxZoom= "19"
			/>
			<Markers/>
		</MapContainer>
	);
}

export default Map;