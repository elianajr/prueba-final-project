import React, { useMemo, useState, useRef } from "react";
import PropTypes from "prop-types";

import { Marker } from "react-leaflet";

export const DraggableMarker = props => {
    const center = {
        lat: 0,
        lng: 0,
    }

    const {callback } = props;

    const [draggable, setDraggable] = useState(true)
    const [position, setPosition] = useState(center)
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
    )

    return (
        <Marker
            draggable={draggable}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}>
        </Marker>
    )
    
}
DraggableMarker.propTypes = {
    callback: PropTypes.func
};