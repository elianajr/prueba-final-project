import React , { useState, useContext, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";
import elianaSeaDragon from "../../img/eliana-sea-dragons.png";
import elianaTurtle from "../../img/eliana-turtle.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #0c82a644',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };


const Profile = () => {
	const { store, actions } = useContext(Context);
    const [profile, setProfile] = useState([]);
    const [isWaterdropper, setIsWaterdropper] = useState(null);
    let params = useParams();
    const [editButton, setEditButton] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const result = {...store.currentUser.result};
    const user = {...store.currentUser.user};

   
    // const favouritesSpots = [...user.favourite_spot];


	useEffect(() => {
        actions.getProfile(params.id);
        // actions.login(params.id);
        console.log(params.id);
	}, []);


    useEffect(()=>{
        setIsWaterdropper(result._is_waterdropper)
        console.log("waterdropper",result._is_waterdropper);
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

                                <p className="profile-sports"> Este es el parrafo de PS
                                    <ul>
                                        {result.sports.map(sport => (
                                            <li key={sport.id}>{sport.name}</li>
                                        ))}
                                    </ul>
                                </p>
                                <p className="profile-level">{user.level}</p>

                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>

                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>
                                </div>
                                {/* <Button>{editButton}</Button> */}
                                {
                                    result.id = store.loggedUser.id
                                    // ? (<Button onClick={handleOpen}><i className="fas fa-pen"></i> Edit profile</Button>)
                                    ? <Link to='/profile-waterdropper'>Edit profile</Link>
                                    : (<span></span>)
                                }
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
                                        <span className="profile-location"><i className="fas fa-map-marker-alt"></i> {user.address}</span>
                                        
                                    </div>
                                </div>
    
                                <p className="profile-sports">{result.sports}</p>
    
                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>
    
                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>
                                    
                                    <a href={user.web} target="_blank" className="profile-link-center">{user.web}</a>
                                    <p className="profile-location"><i className="fas fa-mobile-alt"></i> {user.phone}</p>
                                </div>
                                {/* <Button>{editButton}</Button> */}
                                {/* <Button onClick={handleOpen}><i className="fas fa-pen"></i> Edit profile</Button> */}
                                {
                                    result.id = store.loggedUser.id
                                    ? (<Button onClick={handleOpen}><i className="fas fa-pen"></i> Edit profile</Button>)
                                    : (<span></span>)
                                }
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

     // map((index) => {
            //     return (
            //         <div key={index.id}>
            //             <h5>{index.username}</h5>
            //         </div>
            //         );
            //     })



	return (
        <Fragment>
        <div>{profile}</div>

        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Box>
        </Modal>
    </div>

    </Fragment>
	);
};

export default Profile;
