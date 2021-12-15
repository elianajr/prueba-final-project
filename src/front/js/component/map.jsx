import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import { Context } from "../store/appContext";
import Markers from "./markers.jsx";
import { DraggableMarker } from "./draggableMarker.jsx";
import PropTypes from "prop-types";

const Map = props => {
	const { store, actions } = useContext(Context);
	const [selfMarkerPost, setSelfMarkerPost] = useState(null)
	const [position, setPosition] = useState(null)
	const {callback } = props;

	const getMarkerPosition = position =>{
		console.log(position)
	}

	const iconUser = new L.icon({
		iconUrl: "https://i.ibb.co/48Tntqx/icono-USER.png",
		iconAnchor: null,
		shadowUrl: null,
		ShadowSize: null,
		ShadowAnchor: null,
		iconSize: (45, 45),
	})
	useEffect(()=>{
		callback(position)
	},[position])


	return (
		<MapContainer center={{ lat: "0", lng: "0" }} zoom={3} scrollWheelZoom={true}>
			<LayersControl>
				<LayersControl.BaseLayer checked name="Painted Map">
					<TileLayer
						attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer checked name="Traditional Map">
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.Overlay checked name="HotSpots">
					<LayerGroup>
						<DraggableMarker callback={getMarkerPosition}/>
					</LayerGroup>
				</LayersControl.Overlay>
				<LayersControl.Overlay checked name="Hotpots">
					<LayerGroup>
						<Markers></Markers>
					</LayerGroup>
				</LayersControl.Overlay>
			</LayersControl>
		</MapContainer>
	);
}

Map.propTypes = {
    callback: PropTypes.func
};

export default Map;