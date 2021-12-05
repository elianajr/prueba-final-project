import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Context } from "../store/appContext";
import Markers from "./markers.jsx";

const Map = () =>{
    const { store, actions } = useContext(Context);

	function LocationMarker() {
		const [position, setPosition] = useState(null)
		const map = useMapEvents({
		  click() {
			map.locate()
		  },
		  locationfound(e) {
			setPosition(e.latlng)
			map.flyTo(e.latlng, map.getZoom())
		  },
		})
	  
		return position === null ? null : (
		  <Marker position={position} icon={iconUser}>
			<Popup>It´s you!!</Popup>
		  </Marker>
		)
	  }

	const iconUser = new L.icon({
        iconUrl:"https://i.ibb.co/48Tntqx/icono-USER.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })

	return (
		<MapContainer center={{lat:"78.69607184118358",lng: "-4.443754371312125"}} zoom={13} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
			/>
			<Markers/>
			<LocationMarker />
		</MapContainer>
	);
}

export default Map;