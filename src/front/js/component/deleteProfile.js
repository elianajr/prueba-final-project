import React , { useState, useContext } from "react";
import { useForm, useParams } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";


const DeleteProfile = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, formState: { errors }, handleSubmit } = useForm({mode:"all"});
	const navigate = useNavigate();
	const result = {...store.currentUser.result};
    


	const onSubmit = data => {
		console.log(data);
		console.log('Este es el siguiente log', result.id)
		actions.deleteProfile(data, result.id);
		actions.logout();
	};


	return (
		<div className="register-login-form myprofile">
			<form className="register-login" onSubmit={handleSubmit(onSubmit)}>
				<h6>Sorry to hear you are leaving... Are you sure you wanna continue?</h6>
			
                <input className="button-logreg" type="submit" value="YES" />
				
				<Button className="button-logreg">
					<Link className="link-profile" to='/'>NO</Link>
				</Button> 

				<Link className="link-profile-home" to='/'>Back to home page</Link>
				
			</form>
		</div>
	);
};

export default DeleteProfile;