import React, { useEffect, useState, useContext } from "react";
import { Navbar } from "../component/navbar.js";
import { Footer } from "../component/footer.js";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import Rate from "../component/rating.jsx"


import "../../styles/hotspotID.scss";



const HotspotID = () => {
    const { store, actions } = useContext(Context);
    const [detailElements, setDetailElement] = useState([]);
    const seachIcon = <i class="far fa-paper-plane"></i>

    let params = useParams();

    useEffect(() => {
        actions.getHotspotsDetails(params.id);
    }, []);

    useEffect(() => {
        console.log(store.hotspotsDetails)
    }, [store.hotspotsDetails]);


    return (
        <div className="hotspotDetail-body">
            <Navbar />
            <h2>{store.hotspotsDetails.name}</h2>
            <div className="hotspotDetail-header">
                <div className="hotspotDetail-header__rating">
                    <Rate />
                    <span>156</span>
                </div>

                <div className="hotspotDetail-header__info">
                    <div className="hotspotDetail__description">
                        <p>{store.hotspotsDetails.description}</p>
                    </div>
                    <img src={store.hotspotsDetails.photo} alt="" />
                </div>
            </div>
            <img src="https://i.ibb.co/sbh2B7n/MidBar.png" alt="separador" className="hotspotID-separator" />
            <div className="hotspotDetail-botton">
                <div className="hotspotDetail-botton__comentary">
                    <div className="hotspotDetail-botton__userINPUT">
                        <img src="" alt="" />
                        <div className="hotspotDetail-botton__userINPUT__input">
                            <input type="text" name="" id="" placeholder="Write here your review..."/>
                            <button>{seachIcon}</button>
                        </div>
                        
                    </div>
                    <div className="hotspotDetail-botton__comments">
                        <div className="hotspotDetail-botton__comments__userInfo">
                            <img src="https://i.ibb.co/5GQdSyY/Rectangle-140-M.png" alt="profilefoto" />
                            <span>Juan Guerrero</span>
                            <img src="https://i.ibb.co/gjnw0kV/rate-80.png" alt="fourdrops" />
                        </div>
                        <div className="hotspotDetail-botton__comments__comment">
                            <span>Amazing place</span>
                            <p>By chance found this private tour and don't regret buying it not one minute! Got the first overview of the city, interesting stories and history, but also great was to hear insights of person who lives here - traditions, places to visit and more. Discovered areas that tourists can find only by accident (usually not listed in official guides). Loved this tour! Thanks especially to Juan who was our host!!!</p>
                        </div>
                    </div>
                </div>
                <div className="hotspotDetail-botton__comentary">
                    <div className="hotspotDetail-botton__comments">
                        <div className="hotspotDetail-botton__comments__userInfo">
                            <img src="https://i.ibb.co/PjqSTJs/Rectangle-140.png" alt="" />
                            <span>Mc Urling</span>
                            <img src="https://i.ibb.co/FwfsSV8/rate-100.png" alt="fourdrops" />
                        </div>
                        <div className="hotspotDetail-botton__comments__comment">
                            <span>Fantastic!</span>
                            <p>By chance found this private tour and don't regret buying it not one minute! Got the first overview of the city, interesting stories and history, but also great was to hear insights of person who lives here - traditions, places to visit and more. Discovered areas that tourists can find only by accident (usually not listed in official guides). Loved this tour! Thanks especially to Juan who was our host!!!</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default HotspotID;