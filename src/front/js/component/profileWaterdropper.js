import React , { useState, useContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";
import elianaSeaDragon from "../../img/eliana-sea-dragons.png";
import elianaTurtle from "../../img/eliana-turtle.png";
import editProfile from "./editProfileWaterdropper.js";



const ProfileWaterdropper = () => {
	const { store, actions } = useContext(Context);


	return (

        <div className="row">
            <div className="col-8">
		        <div className="profile-waterdropper-container">
                    <div className="main-photo-waterdropper">
                        <div className="cover-photo-waterdropper">
                            <img src={elianaTurtle} alt="cover-photo" />
                        </div>
                        <div className="profile-photo-waterdropper">
                            <img src={elianaSeaDragon} alt="profile-photo" />
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="row">
                            <div className="col-8">
                                <h5 className="profile-name">Eliana Jordan</h5>
                                <span className="profile-username">elianajr</span>
                            </div>
                            <div className="col-4">
                                <span className="profile-location"><i className="fas fa-map-marker-alt"></i> Madrid</span>
                            </div>
                        </div>

                        <p className="profile-sports">Scuba</p>
                        <p className="profile-level">Professional</p>

                        <button className="buttonWTD_stylee">Add spot</button>
                        <span className="profile-instagram"><i className="fab fa-instagram"></i></span>
                        <span className="profile-facebook"><i className="fab fa-facebook"></i></span>

                        <div className="profile-about">
                            <h5 className="profile-about-title">About</h5>
                            <p className="profile-about-text">I learn how to dive 7 years ago in Thailand and since the very first moment I got absolute amazed by the underwater world, all colours, fish and feeling the water on top of my head, made me feel like an astronaut who want to meet every single specie. 4 years ago I decided to become instructor to share my passion with everybody!</p>
                        </div>
                        
                        <button >
                      
                        Show the modal
                        </button>
                        
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="profile-fav">
                    <h5 className="fav-title">My fav spots</h5>
                    <ul className="fav-list">
                        <li>lista</li>
                    </ul>
				</div>

                <div className="profile-fav">
                    <h5 className="fav-title">My fav centers</h5>
                    <ul className="fav-list">
                        <li>lista</li>
                    </ul>
				</div>
            </div>
		</div>
	);
};

export default ProfileWaterdropper;
