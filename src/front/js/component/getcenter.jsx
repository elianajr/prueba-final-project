import React, { useContext, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Context } from "../store/appContext";
import Markers from "./markers.jsx";

export const GetMapCenter = () =>{
    const MyComponent=()=> {
        const map = useMap()
        console.log('map center1:', map.getCenter())
        return null
      }
      
        
    return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
        <TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png"
		/>
        {MyComponent() }
    </MapContainer>
    )    
}