import React from "react";
import Map from "../component/map.jsx"
import Rate from "../component/rating.jsx";
import { SearchBar } from "../component/searchBar.jsx";
import { Navbar } from "../component/navbar.js";
import { AddSpotForm } from "../component/addSpotForm.jsx";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';

import "../../styles/hotspot.scss";

const HotSpot = () => {

    const iconLocation = <img src="https://i.ibb.co/NrxcS1d/carbon-location.png" alt="locationSpot" height="18px" width="18px" />
    const inconPhone = <img src="https://i.ibb.co/TY7K7by/clarity-phone-handset-line.png" alt="Phone" height="18px" width="18px" />
    const iconWorld = <img src="https://i.ibb.co/V20QQSm/ps-world.png" alt="world" height="18px" width="18px" />
    const surf = <img src="https://i.ibb.co/ssMzJnP/mdi-kitesurfing.png" alt="surf" />
    const snorkel = <img src="https://i.ibb.co/JBVt1Tt/mdi-diving-snorkel.png" alt="snorkel" />
    const kitesurf = <img src="https://i.ibb.co/GVKWPVT/map-surfing.png" alt="kitesurf" />
    const diving = <img src="https://i.ibb.co/pfCWKG5/mdi-diving-helmet.png" alt="diving" />

    const [open, setOpen] = React.useState(false);
    const [sport, setSport] = React.useState('')
    const [level, setLevel] = React.useState('')
    const sports = [
        {
            value: 'Snorkel',
            label: snorkel,
            name: 'Snorkel',
        },
        {
            value: 'Surf',
            label: surf,
            name: 'Surf',
        },
        {
            value: 'Kitesurf',
            label: kitesurf,
            name: 'KiteSurf',
        },
        {
            value: 'Scuba',
            label: diving,
            name: 'Scuba',
        },

    ];
    const check=[true,true,true,true]

    const levels = [
        {
            value: 'Noob',
            label: 'Noob',
        },
        {
            value: 'Experienced',
            label: 'Experienced',
        },
        {
            value: 'Professional',
            label: 'Professional',
        },
    ];

    const getMarkerPosition = position =>{
		console.log("HOTSPOT",position)
	}

    return (
        <div className="hotspot-container">
            <Navbar className="hotspot-navbar" />
            <div className="hotspot-body">
                <div className="hotspot-topbody">
                    <div className="hotspot-topbody__recomendation">
                        <div className="recomendation__searchbar">
                            <SearchBar />
                        </div>
                        <div>
                            <ul>
                                <li className="recomendation__list">
                                    <article className="recomendation__list__title">
                                        <h5>Scuba Diving Center sea Diver</h5>
                                        <Rate />
                                        <div className="recomendation__list__info">
                                            <p className="list-info__direcction">{iconLocation}410 Atkinson Dr SUITE 1F32A</p>
                                            <a className="list-info__web" href="http://www.divealohascuba.com/">{iconWorld}http://www.divealohascuba.com/</a>
                                            <p className="list-info__phone">{inconPhone}+1234584569</p>
                                        </div>
                                    </article>
                                    <figure>
                                        {<img src="https://lh5.googleusercontent.com/p/AF1QipNxq7n0_WnhXzz38fwR49jJUM_GaJmVmxg4LxyU=w156-h96-p-k-no" alt="recomendation-list__photo" className="list-info__photo" height="100px" width="100px" />}
                                    </figure>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Map className="map" callback={getMarkerPosition} checked={check}/>
                </div>
                <div className="hotspot-bottonbody">
                    <div className="hotspot-bottonbody_title">
                        <p>HERE YOU CAN FIND!</p>
                    </div>
                    <div className="photos">
                        <div className="photo_file">
                            <div className="img" />
                            <div className="img" />
                            <div className="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default HotSpot;