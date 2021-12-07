/*  */import React from "react";
import {Marker, Popup} from 'react-leaflet'
import L from 'leaflet';


const Markers = () => {

    const iconLightblue = new L.icon({
        iconUrl:"https://i.ibb.co/4pHvHPR/WDS-logo.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconPink = new L.icon({
        iconUrl:"https://i.ibb.co/dL8729s/icon-pink.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconRed = new L.icon({
        iconUrl:"https://i.ibb.co/XYwzw8X/icon-red.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconYellow = new L.icon({
        iconUrl:"https://i.ibb.co/yQj1H4t/icon-yellow.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconOrange = new L.icon({
        iconUrl:"https://i.ibb.co/09zZ5Td/icon-orange.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconDarkblue = new L.icon({
        iconUrl:"https://i.ibb.co/kG1ZchQ/icon-darkblue.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    const iconGreen = new L.icon({
        iconUrl:"https://i.ibb.co/b67HYwc/icon-green.png",
        iconAnchor: null,
        shadowUrl: null,
        ShadowSize:null,
        ShadowAnchor:null,
        iconSize:(45,45),
    })
    return(
        <div> 
            <Marker position ={{lat:"36.69607184118358", lng:"-4.443754371312125"}} icon={iconRed}>
                <Popup>
				    Mi CASA <br /> <i className="fas fa-tint"></i>!!!
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.68429561734708", lng:"-4.4438159139463345"}} icon={iconDarkblue}>
                <Popup>
				    Guadalmar <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.66310013992609", lng:"-4.458165348112302"}} icon={iconOrange}>
                <Popup>
				    Bajondillo <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:" 36.5925477494608", lng:"-4.522863616485652"}} icon={iconPink}>
                <Popup>
				    Carvajal <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.54710553883746", lng:"-4.615685019469322"}} icon={iconGreen}>
                <Popup>
				    Los bolivhes <br /> BEACH
				</Popup>
            </Marker>
            <Marker position ={{lat:"36.48610420935234", lng:"-4.738123271052825"}} icon={iconYellow}>
                <Popup>
				    Calahonda <br /> BEACH
				</Popup>
            </Marker>
        
        </div>
    )
}
export default Markers;