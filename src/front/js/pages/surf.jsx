import React, { useEffect, useState, useContext } from "react";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import Map from "../component/map.jsx"
import  MiniForecast from "../component/miniForecast.jsx";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/surf.scss"

export const Surf = ()=>{
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState(null);
    const check = [false,true,false,false]

    
  
    const getMarkerPosition = position =>{
		console.log("surfSpot",position)
	}

    useEffect(
		() => { 
			setDetailElement(
				store.hotspots.map((index, info) => {
                    if(index.sport_id == 2){
                        return (
                            <div >
                                <ul key={info} >
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
        <div className="bodySurf">
            <Navbar/>
                <div className="bodySurf-top">
                    <div className="bodySurf-top__polaroids">
                        <div className="bodySurf-top__polaroids__one">
                            <img src="https://i.ibb.co/h2pdf1n/surf1.png" alt="surf_one" />
                        </div>
                        <div className="bodySurf-top__polaroids__two">
                            <img src="https://i.ibb.co/khDZFzr/surf2.png" alt="surf_two" />
                        </div>
                        <div className="bodySurf-top__polaroids__three">
                            <img src="https://i.ibb.co/cCK0nRX/surf3.png" alt="surf_three" />
                        </div>
                    </div>
                    <span className="bodySurf-top__tittleOne">SURF</span>
                    <span className="bodySurf-top__tittleTwo">SURF</span>   
                    <p className="bodySurf-top__senseOne">The wave you need is here...</p>
                    <p className="bodySurf-top__senseTwo">Are you going to miss it?</p>
                    <img src="https://i.ibb.co/Zh696fs/wordl.png" alt="" />
                </div>
                <div className="bodySurf-mid">
                    <div className="bodySurf-mid__map"><Map callback={getMarkerPosition} checked={check}/></div>
                </div>
                <div className="bodySurf-bot">
                    <div className="bodySurf-bot__forecast"><MiniForecast/></div>
                    <div className="bodySurf-bot__best">
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