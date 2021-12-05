import React from "react";
import Map from "../component/map.jsx"
import Rate from "../component/rating.jsx";
import { SeachBar } from "../component/searchBar.jsx";

import "../../styles/hotspot.scss";

const HotSpot = () =>{

    const iconLocation = <img src="https://i.ibb.co/NrxcS1d/carbon-location.png" alt="locationSpot" height="18px" width="18px" />
    const inconPhone =<img src="https://i.ibb.co/TY7K7by/clarity-phone-handset-line.png" alt="Phone" height="18px" width="18px" />
    const iconWorld = <img src="https://i.ibb.co/V20QQSm/ps-world.png" alt="world" height="18px" width="18px" />

    return (
    <div className="hotspot-container">
        <div className="hotspot-topbody">
            <div className="hotspot-topbody__recomendation">
                <div className="recomendation__searchbar">
                    <SeachBar/>
                </div>
                <div>
                    <ul>
                        <li className="recomendation__list">
                            <article className="recomendation__list__title">
                                <h5>Scuba Diving Center sea Diver</h5>
                                <Rate/>
                                <div className="recomendation__list__info">
                                    <p className="list-info__direcction">{iconLocation}410 Atkinson Dr SUITE 1F32A</p>
                                    <a className="list-info__web" href="http://www.divealohascuba.com/">{iconWorld}http://www.divealohascuba.com/</a>
                                    <p className="list-info__phone">{inconPhone}+1234584569</p>
                                </div>
                            </article>
                                <figure>
                                    {<img src="https://lh5.googleusercontent.com/p/AF1QipNxq7n0_WnhXzz38fwR49jJUM_GaJmVmxg4LxyU=w156-h96-p-k-no" alt="recomendation-list__photo" className="list-info__photo" height="100px" width="100px"/>}
                                </figure>
                        </li>
                    </ul>
                </div>   
            </div>
            <Map className="map"/>
        </div>
        <div className="species">
            <div className="species_title">Here you can find</div>
            <div className="photos">
                <div className="photo_file">
                    <div className="img"/>
                    <div className="img"/>
                    <div className="img"/>
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default HotSpot;