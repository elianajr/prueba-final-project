import React , { useState, useContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/profile.scss";
import elianaSeaDragon from "../../img/eliana-sea-dragons.png";
import elianaTurtle from "../../img/eliana-turtle.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { seteuid } from "process";

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
    const [userSports, setUserSports] = useState("");
    const [sports, setSports] = useState("");
    const [editForm, setEditForm] = useState();
    const [form, setForm] = useState();
    const { watch, register, getValues, formState: { errors, isValid }, handleSubmit } = useForm();

    let params = useParams();
    const [editButton, setEditButton] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const result = {...store.currentUser.result};
    const user = {...store.currentUser.user};
    const mysports = {...result.sports};

    // const favouritesSpots = [...user.favourite_spot];

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {navigate("/login")};
        // if(!store.loggedUser) {navigate("/login")};
    }, [])

    console.log(store.currentUser)


    // const onSubmit = data => {
	// 	console.log(data);
	// 	actions.editProfile(data);
	// };

	useEffect(() => {
        actions.getProfile(params.id);
        console.log(params.id);
	}, []);


    useEffect(()=>{
        setIsWaterdropper(result._is_waterdropper);
        // console.log("waterdropper",result._is_waterdropper);
        // console.log("user", user);
        // console.log("result", result);
        // console.log("pepeee", sports)
        setSports(store.currentUser.result)
        
    }
    ,[store.currentUser])

    console.log(sports)


    useEffect(()=> {
        console.log(result.sports);
        
    }
    ,[store.currentUser])



    useEffect(()=>{
    //    // setSports(userSports.map((value, i) =>{
    //         return (
    //                 <div>
    //                 <div key={i.toString()}>
    //                     <div>{value.name}</div>
    //                 </div>
    //                 </div>
    //             )
    //     })
    //     //)
    if (userSports!="") {
        
    }
   
    
    }, [userSports])


   


    useEffect(() => {
        console.log("login", result.id);
        console.log("logggg", store.loggedUser.id);
		result.id != store.loggedUser.id
			? setEditButton("")
			: setEditButton(
                <Button onClick={handleOpen}><i className="fas fa-pen"></i> Edit profile</Button>
			  );
	}, [store.currentUser]);


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

                                {/* <p className="profile-sports">{result.sports}</p> */}
                                <p className="profile-level">{user.level}</p>

                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>

                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>
                                </div>
                                <Link to={"/profile-waterdropper/" + params.id}>
                                <Button
                                // onClick={() => {setEditForm(true)}}
                                >{editButton}</Button>
                                </Link>
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

                                {/* <p className="profile-sports">{result.sports}</p> */}

                                <button className="buttonWTD_stylee">Add spot</button>
                                <a href={result.instagram} target="_blank" className="profile-instagram"><i className="fab fa-instagram"></i></a>
                                <a href={result.facebook} target="_blank" className="profile-facebook"><i className="fab fa-facebook-square"></i></a>

                                <div className="profile-about">
                                    <h5 className="profile-about-title">About</h5>
                                    <p className="profile-about-text">{result.about}</p>

                                    <a href={user.web} target="_blank" className="profile-link-center">{user.web}</a>
                                    <p className="profile-location"><i className="fas fa-mobile-alt"></i> {user.phone}</p>
                                </div>
                                <Link to={"/profile-center/" + params.id}>
                                <Button
                                // onClick={() => {setEditForm(true)}}
                                >{editButton}</Button>
                                </Link>
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
    [isWaterdropper]);


    // useEffect (() => {
    //     if(isWaterdropper == true) {
    //         setForm(
    //         <Fragment>
    //             <Modal
    //                 open={open}
    //                 onClose={handleClose}
    //                 aria-labelledby="modal-modal-title"
    //                 aria-describedby="modal-modal-description"
    //             >
    //                 <Box sx={style}>


    //         <Typography id="modal-modal-title" variant="h6" component="h2">
    //             Edit profile
    //         </Typography>
    //             <TextField
    //                 required
    //                 id="filled-required"
    //                 label="Username"
    //                 defaultValue={result.username}
    //                 variant="filled"
    //                 size="small"
    //                 {...register("username", { required: true })}
    //                 />

    //             <Button type="submit">Submit</Button>
    //             </Box>
    //         </Modal>
    //         </Fragment>
    //         )
    //     } else {
    //         setForm(
    //         <Fragment>
    //             <Modal
    //                 open={open}
    //                 onClose={handleClose}
    //                 aria-labelledby="modal-modal-title"
    //                 aria-describedby="modal-modal-description"
    //             >
    //                 <Box sx={style}>


    //         <Typography id="modal-modal-title" variant="h6" component="h2">
    //             Edit profile
    //         </Typography>
    //             <TextField
    //                 required
    //                 id="filled-required"
    //                 label="About"
    //                 defaultValue={result.about}
    //                 variant="filled"
    //                 size="small"
    //                 />

    //             <Button type="submit">Submit</Button>
    //             </Box>
    //         </Modal>
    //         </Fragment>
    //         )
    //     }
    // },
    // [isWaterdropper, editForm])


	return (
        <Fragment>
        <div>{profile}</div>
        {/* <Button>{editButton}</Button> */}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
		{form}

        <div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>


            <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit profile
            </Typography>
            <Typography id="modal-modal-description" >
                {/* <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                ></Box> */}
                {/* <input
                    required
                    id="filled-required"
                    label="Username"
                    defaultValue={user.first_name}
                    variant="filled"
                    size="small"
                    {...register("username", { required: true })}
                    />
                <TextField
                    required
                    id="filled-required"
                    label="About"
                    defaultValue={result.about}
                    variant="filled"
                    size="small"
                    {...register("about", { required: true })}
                    />

                <Button otype="submit">Submit</Button>
            </Typography>
            </Box>
        </Modal>
    </div> */}
    {/* </form>  */}

    </Fragment>
	);
};

export default Profile;