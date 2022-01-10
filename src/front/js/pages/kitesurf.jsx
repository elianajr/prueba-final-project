import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import Map from "../component/map.jsx"
import  MiniForecast from "../component/miniForecast.jsx";
import { Link } from "react-router-dom";

import "../../styles/kitesurf.scss"

export const Kitesurf = ()=>{
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState(null);
    const check = [false,false,false,true];

    const getMarkerPosition = position =>{
		console.log("Kitesurf spot",position)
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
        <div className="bodyKitesurf">
            <Navbar/>
                <div className="bodyKitesurf-top">
                    <div className="bodyKitesurf-top__polaroids">
                        <div className="bodyKitesurf-top__polaroids__one">
                            <img src="https://i.ibb.co/YZ0vLJd/kitesurf2.png" alt="Kitesurf_one" />
                        </div>
                        <div className="bodyKitesurf-top__polaroids__two">
                            <img src="https://i.ibb.co/Kr6w5vY/kitesurf1.png" alt="Kitesurf_two" />
                        </div>
                        <div className="bodyKitesurf-top__polaroids__three">
                            <img src="https://i.ibb.co/N7FKZkF/kitesurf3.png" alt="Kitesurf_three" />
                        </div>
                    </div>
                    <span className="bodyKitesurf-top__tittleOne">KITESURF</span>
                    <span className="bodyKitesurf-top__tittleTwo">KITESURF</span>   
                    <p className="bodyKitesurf-top__senseOne">The blow you need is here...</p>
                    <p className="bodyKitesurf-top__senseTwo">Are you going to miss it?</p>
                    <img src="https://i.ibb.co/Zh696fs/wordl.png" alt="" />
                </div>
                <div className="bodyKitesurf-mid">
                    <div className="bodyKitesurf-mid__map"><Map callback={getMarkerPosition} checked={check}/></div>
                </div>
                <div className="bodyKitesurf-bot">
                    <div className="bodyKitesurf-bot__forecast"><MiniForecast/></div>
                    <div className="bodyKitesurf-bot__best">
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