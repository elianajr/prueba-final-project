import React from "react";
import { Navbar } from "../component/navbar.js";
import {Footer} from "../component/footer.js"
import "../../styles/aboutus.scss"


export const AboutUs = () =>(

    <div className="aboutUs-body">
        <Navbar/>
        <div className="aboutUs-topBody">
            <div className="aboutUs-topBody__who">
                <div className="aboutUs-topBody__who__Q">
                   <h3>WHO WE ARE?</h3> 
                </div>
                <div className="aboutUs-topBody__who__T">
                    <p>We are a young team of developers that love water sports and our main goal is to help you.</p>
                </div>
            </div>
            <div className="aboutUs-topBody__what">
                <img src="https://i.ibb.co/4tgQpLJ/Img-about-us.png" alt="" />
                <div className="aboutUs-topBody__what__T">
                    <h3>WHAT CAN WE OFFER</h3>
                    <p>We will help you to find the information about the places where you can practise your favourites water sports and have a good time during your journey </p>
                </div>
            </div>
        </div>
        <div className="aboutUs-midBody">
            <h2>WHAT ELSE YOU SHOULD KNOW</h2>
            <div className="aboutUs-midBody__infoBox">
                <div className="aboutUs-midBody__info">
                    <h2>HELP FROM ANYWEHERE</h2>
                    <p>You can contact with us wherever you are.</p>
                </div>
                <div className="aboutUs-midBody__info">
                    <h2>UPDATED INFORMATION</h2>
                    <p>We have precise and updated knowledge of the best places.</p>
                </div>
                <div className="aboutUs-midBody__info">
                    <h2>POTENTIAL</h2>
                    <p>We predict a great increase in our number of clients.</p>
                </div>
            </div>
        </div>
        <div className="aboutUs-botBody">
            <div className="aboutUs-botBody__text">
                <h1>Do you want to see what can we do?</h1>
                <p>You cand send your information and we will contact you</p>
            </div>
            <div className="aboutUs-botBody__send">
                <input type="text" placeholder="Email"/>
                <button>Send</button>
            </div>
        </div>
        <Footer/>
    </div>
)