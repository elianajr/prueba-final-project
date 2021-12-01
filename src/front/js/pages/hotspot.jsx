import React from "react";
import Map from "../component/map.jsx"
import "../../styles/hotspot.scss";

const HotSpot = () =>{
    return (
    <div className="container">
        <div className="top_body">
            <div className="hotspots">
                <p>SEARCH BAR</p>
                <ul>
                    <li>COSAS</li>
                    <li>COSAS</li>
                    <li>COSAS</li>
                    <li>COSAS</li>
                    <li>COSAS</li>
                </ul>
            </div>
            <Map/>
        </div>
        <div className="species">
            <div className="species_title">Here you can find</div>
            <div className="photos">
                <div className="photo_file">
                    <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    <img src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                </div>
            </div>
        </div>
    </div>
    )
    
}

export default HotSpot;