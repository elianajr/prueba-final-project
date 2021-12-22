import React , { useState, useContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate, Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };


const Profile = () => {
	const { store, actions } = useContext(Context);
    const [profile, setProfile] = useState([]);
    const [isWaterdropper, setIsWaterdropper] = useState(null);
    const [editButton, setEditButton] = useState();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let params = useParams();
    
    const result = {...store.currentUser.result};
    const user = {...store.currentUser.user};
    //const favcenters = [...user.favourite_centers];

	// useEffect(() => {
    //     actions.getProfile(params.id);
    //     console.log(params.id);
	// }, []);

    useEffect(() => {
        localStorage.getItem("token") ? actions.getProfile(params.id) : navigate("/login");
    }, [])


    useEffect(()=>{
        setIsWaterdropper(result._is_waterdropper);
        // console.log("fav centers", favcenters);
        if(result.id == store.loggedUser.id) {
            setEditButton(<Button><i className="fas fa-pen"></i> Edit profile</Button>)
        } else {
            setEditButton("")
        }
    }
    ,[store.currentUser])


    // useEffect(() => {
    //     console.log("logggg", store.loggedUser.id);
	// 	result.id != store.loggedUser.id
	// 		? setEditButton("")
	// 		: setEditButton(
    //             <Button onClick={handleOpen}><i className="fas fa-pen"></i> Edit profile</Button>
	// 		  );
	// }, [store.currentUser]);

    
    useEffect(
        () => {
        if(isWaterdropper == true) {
            setProfile(
            <Fragment>
                <div className="row">
                    <div className="col-8">
                        <div className="profile-waterdropper-container">
                            <div className="main-photo-waterdropper">
                                <div className="cover-photo-waterdropper">
                                    <img src={result.cover_photo} alt="cover-photo" />
                                </div>
                                <div className="profile-photo-waterdropper">
                                    <img src={result.photo} alt="profile-photo" />
                                </div>
                            </div>

                            <div className="profile-body">
                                <div className="row">
                                    <div className="col-8">
                                        <h5 className="profile-name">{user.first_name} {user.last_name}</h5>
                                        <span className="profile-username">{result.username}</span>
                                    </div>
                                    <div className="col-4">
                                        <span className="profile-location"><i className="fas fa-map-marker-alt"></i> {user.location}</span>
                                        
                                    </div>
                                </div>

                                <div className="profile-sports">
                                    <ul>
                                        {result.sports.map(sport => (
                                            <li key={sport.id}>{sport.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="profile-level">{user.level}</p>
                                </div>
                               

                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>

                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>
                                </div>
                                <Link className="link-profile" to='/profile-waterdropper'>{editButton}</Link>
                                <Link className="link-profile-delete" to='/delete-profile'><i className="far fa-trash-alt"></i>delete account</Link>
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
            </Fragment>
            )
        } else {
            setProfile(
            <Fragment>
                <div className="row">
                    <div className="col-8">
                        <div className="profile-waterdropper-container">
                            <div className="main-photo-waterdropper">
                                <div className="cover-photo-waterdropper">
                                    <img src={result.cover_photo} alt="cover-photo" />
                                </div>
                                <div className="profile-photo-waterdropper">
                                    <img src={result.photo} alt="profile-photo" />
                                </div>
                            </div>
    
                            <div className="profile-body">
                                <div className="row">
                                    <div className="col-8">
                                        {/* <h5 className="profile-name">{user.first_name} {user.last_name}</h5> */}
                                        <span className="profile-name">{result.username}</span>
                                    </div>
                                    <div className="col-4">
                                        <p className="profile-location"><i className="fas fa-mobile-alt"></i> {user.phone}</p>
                                    </div>
                                </div>
    
                                {/* <div className="profile-sports">
                                    <ul>
                                        {result.sports.map(sport => (
                                            <li key={sport.id}>{sport.name}</li>
                                        ))}
                                    </ul>
                                </div> */}
    
                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>
    
                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>
                                    
                                    <a href={user.web} target="_blank" className="profile-link-center">{user.web}</a>
                                    <p className="profile-location"><i className="fas fa-map-marker-alt"></i> {user.address}</p>
                                </div>
                                <Link className="link-profile" to='/profile-center'>{editButton}</Link>
                                <Link className="link-profile-delete" to='/delete-profile'><i className="far fa-trash-alt"></i>delete account</Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-4">
                        <div className="profile-fav">
                            <h5 className="fav-title">Spots where we go</h5>
                            <ul className="fav-list">
                                <li>lista</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
            );
        }
        },
        [isWaterdropper]
    );


	return (
        <Fragment>
        <div>{profile}</div>
        </Fragment>
	);
};

export default Profile;
