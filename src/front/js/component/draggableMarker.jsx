import React, { useMemo, useState, useRef, useEffect,useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { AddSpotForm } from "./addSpotForm.jsx";
import { Marker, Popup } from "react-leaflet";
import Button from '@mui/material/Button';

export const DraggableMarker = props => {
    const { store, actions } = useContext(Context);
    const [newSpot, setNewspot]= useState(null);
    const [button,setButton] = useState(null);

    const center = {
        lat: 0,
        lng: 0,
    }
    const {callback } = props;

    const iconUser = new L.icon({
		iconUrl: "https://i.ibb.co/48Tntqx/icono-USER.png",
		iconAnchor: null,
		shadowUrl: null,
		ShadowSize: null,
		ShadowAnchor: null,
		iconSize: (65, 65),
	})

    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
    const [addHotspot, setAddHotspot] = useState(null)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                    callback(marker.getLatLng())
                }
            },
        }),
        [],
    );

    const spotForm = form=>{
        setNewspot({...form});
    };

    useEffect(()=>{
        actions.addNewHotspot(newSpot)
        console.log(newSpot)
    },[newSpot])
    
    return (
        <Marker
            icon={iconUser}
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
                <Popup>
				    I am draggable!!
                    <br />
                    Use me if you want to add a Hotspot!
                    <br/>
                    1º - Spot me on the best place.
                    <br/>
                    2º - Press the button bellow.
                    <br/>
                    <div>
                        <AddSpotForm spotForm={spotForm} lat={position.lat} lng={position.lng}></AddSpotForm>
                    </div>
				</Popup>
        </Marker>
    )
}
DraggableMarker.propTypes = {
    callback: PropTypes.func
};