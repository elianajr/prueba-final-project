import React from "react";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import Map from "../component/map.jsx"
import  MiniForecast from "../component/miniForecast.jsx";

import "../../styles/kitesurf.scss"

export const Kitesurf = ()=>{
    const check = [false,false,false,true];

    const getMarkerPosition = position =>{
		console.log("Kitesurf spot",position)
	};

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
                            <div></div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}