import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, LayersControl, LayerGroup } from "react-leaflet";
import { Context } from "../store/appContext";
import { DraggableMarker } from "./draggableMarker.jsx";
import PropTypes from "prop-types";
import { KitesurfMarker } from "./kitesurfMarker.jsx";
import { SurfMarker } from "./surfMarker.jsx";
import { ScubaMarker } from "./scubaMarker.jsx";
import { SnorkelMarker } from "./snorkelMarker.jsx";


const Map = props => {
	const { store, actions } = useContext(Context);
	const {callback } = props;
	const [sport,setsport]=useState([])

	
	

	const getMarkerPosition = position =>{
		callback(position)
	}

	useEffect(()=>{
		setsport([...props.checked])

	},[])

	return (
		<MapContainer center={{ lat: "0", lng: "0" }} zoom={2} minZoom={2} scrollWheelZoom={true}>
			<LayersControl>
				<LayersControl.BaseLayer checked name="Painted Map">
					<TileLayer
						attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"
					/>
				</LayersControl.BaseLayer>
				<LayersControl.BaseLayer  name="Traditional Map">
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
				<LayersControl.Overlay checked={sport[0]} name="SNORKEL">
					<LayerGroup>
						<SnorkelMarker></SnorkelMarker>
					</LayerGroup>
				</LayersControl.Overlay>
				<LayersControl.Overlay checked={sport[1]} name="SURF">
					<LayerGroup>
						<SurfMarker></SurfMarker>
					</LayerGroup>
				</LayersControl.Overlay>
				<LayersControl.Overlay checked={sport[2]} name="SCUBA">
					<LayerGroup>
						<ScubaMarker></ScubaMarker>
					</LayerGroup>
				</LayersControl.Overlay>
				<LayersControl.Overlay checked={sport[3]} name="KITESURF">
					<LayerGroup>
						<KitesurfMarker></KitesurfMarker>
					</LayerGroup>
				</LayersControl.Overlay>
			</LayersControl>
		</MapContainer>
	);
}

Map.propTypes = {
    callback: PropTypes.func,
	checked: PropTypes.array
};

export default Map;