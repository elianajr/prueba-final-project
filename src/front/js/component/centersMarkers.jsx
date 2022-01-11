import React, { useEffect, useContext, useState } from "react";
import { Marker, Popup } from 'react-leaflet'
import { Context } from "../store/appContext";
import L from 'leaflet';
import { useParams } from "react-router-dom";

export const CentersMarkers = () => {
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState(null);

    const iconBlue = new L.icon({
        iconUrl: "https://i.ibb.co/kG1ZchQ/icon-darkblue.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize: null,
        ShadowAnchor: null,
        iconSize: (45, 45),
    })

    let params = useParams();
 
    useEffect(()=>{
        actions.getAllCenters(params.id);
    },[])

    useEffect(()=>{
            setDetailElement(
                store.centers.map((index)=>{ 
                
                return(
                    <div key={index.id}>
                        <Marker position={{ lat: index.latitude, lng: index.longitude }}  icon={iconBlue} >
                            <Popup>{index.name}<br/>{index.addresse}</Popup>
                        </Marker>
                    </div>
                )
                })
            );
    },[store.centers]);

return (
    <div>
         {detailElements}
    </div>
);
}