import React from "react";
import {Navbar} from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import Map from "../component/map.jsx"
import  MiniForecast from "../component/miniForecast.jsx";

import "../../styles/snorkel.scss"

export const Snorkel = ()=>{
    const check = [true,false,false,false]

    const getMarkerPosition = position =>{
		console.log("snorkel spot",position)
	}
    
    return(
        <div className="bodySnorkel">
            <Navbar/>
                <div className="bodySnorkel-top">
                    <div className="bodySnorkel-top__polaroids">
                        <div className="bodySnorkel-top__polaroids__one">
                            <img src="https://i.ibb.co/GcFY3nC/snorkel3.png" alt="snorkel_one" />
                        </div>
                        <div className="bodySnorkel-top__polaroids__two">
                            <img src="https://i.ibb.co/txpLQDC/snorkel1.png" alt="snorkel_two" />
                        </div>
                        <div className="bodySnorkel-top__polaroids__three">
                            <img src="https://i.ibb.co/Yyd9pBv/snorkel2.png" alt="snorkel_three" />
                        </div>
                    </div>
                    <span className="bodySnorkel-top__tittleOne">SNORKEL</span>
                    <span className="bodySnorkel-top__tittleTwo">SNORKEL</span>   
                    <p className="bodySnorkel-top__senseOne">The breath you need is here...</p>
                    <p className="bodySnorkel-top__senseTwo">Are you going to miss it?</p>
                    <img src="https://i.ibb.co/Zh696fs/wordl.png" alt="" />
                </div>
                <div className="bodySnorkel-mid">
                    <div className="bodySnorkel-mid__map"><Map callback={getMarkerPosition} checked={check}/></div>
                </div>
                <div className="bodySnorkel-bot">
                    <div className="bodySnorkel-bot__forecast"><MiniForecast/></div>
                    <div className="bodySnorkel-bot__best">
                            <p>The best places in the world </p>
                            <div></div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}