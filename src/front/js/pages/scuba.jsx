import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import Map from "../component/map.jsx";
import  MiniForecast from "../component/miniForecast.jsx";
import { Link } from "react-router-dom";

import "../../styles/scuba.scss"

export const Scuba = ()=>{
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState(null);
    const check = [false,false,true,false];

    const getMarkerPosition = position =>{
		console.log("scuba spot",position)
	};

    useEffect(
		() => { 
			setDetailElement(
				store.hotspots.map((index, info) => {
                    if(index.sport_id == 2){
                        return (
                            <div >
                                <ul key={index.id}>
                                    <Link to={`/hotspotID/${index.id}`} >
                                        <li className="bestplaces-list">
                                            {index.name}<img src={index.photo} alt="" width="50" height="25" />
                                        </li>
                                    </Link>
                                </ul>
                            </div>
					    );
                    }
				})
			);
		},
	[store.hotspots]
	);

    return(
        <div className="bodyScuba">
            <Navbar/>
                <div className="bodyScuba-top">
                    <div className="bodyScuba-top__polaroids">
                        <div className="bodyScuba-top__polaroids__one">
                            <img src="https://i.ibb.co/jZ08W73/scuba1.png" alt="Scuba_one" />
                        </div>
                        <div className="bodyScuba-top__polaroids__two">
                            <img src="https://i.ibb.co/7bDzYqp/scuba2.png" alt="Scuba_two" />
                        </div>
                        <div className="bodyScuba-top__polaroids__three">
                            <img src="https://i.ibb.co/M2kdwyX/scuba3.png" alt="Scuba_three" />
                        </div>
                    </div>
                    <span className="bodyScuba-top__tittleOne">SCUBA</span>
                    <span className="bodyScuba-top__tittleTwo">SCUBA</span>   
                    <p className="bodyScuba-top__senseOne">The experience you need is here...</p>
                    <p className="bodyScuba-top__senseTwo">Are you going to miss it?</p>
                    <img src="https://i.ibb.co/Zh696fs/wordl.png" alt="" />
                </div>
                <div className="bodyScuba-mid">
                    <div className="bodyScuba-mid__map"><Map callback={getMarkerPosition} checked={check}/></div>
                </div>
                <div className="bodyScuba-bot">
                    <div className="bodyScuba-bot__forecast"><MiniForecast/></div>
                    <div className="bodyScuba-bot__best">
                            <p>The best places in the world </p>
                            <div className="bodySurf-bot__best__places">
                                {detailElements}
                            </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}