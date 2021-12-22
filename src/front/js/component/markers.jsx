import React, { useEffect, useContext, useState } from "react";
import {Marker, Popup} from 'react-leaflet'
import { Context } from "../store/appContext";
import L from 'leaflet';
import { useParams } from "react-router-dom";


const Markers = () => {
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState(null);

    let params = useParams();

    
    useEffect(()=>{
        actions.getAllHotspots(params.id);
        
    },[])

    useEffect(
		() => { 
            console.log(store.hotspots)
			setDetailElement(
				store.hotspots.map((index, info) => {
					return (
						<div key={index.id}>
							<Marker position ={{lat:index.latitude, lng:index.longitude}} element={info}>
                                <Popup>{index.name}<br/><img src={index.photo} alt="" width="200" height="100" /></Popup>
                            </Marker>
						</div>
					);
				})
			);
		},
		[store.hotspots]
	);
    
    
    return(
        <div> 
            {detailElements}
        </div>
    )
}
export default Markers;