import React , { useState, useContext } from "react";
import { useForm, useParams } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";


const DeleteProfile = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, formState: { errors }, handleSubmit } = useForm({mode:"all"});
	const navigate = useNavigate();
    let params = useParams();


	// useEffect(() => {
    //     actions.getProfile(params.id);
    //     console.log(params.id);
    //   }, []);


	const onSubmit = data => {
		console.log(data);
		actions.deleteProfile(data);
	};


	return (
		<div className="register-login-form">
			<form className="register-login" onSubmit={handleSubmit(onSubmit)}>
				<span>Sorry to hear you are leaving... Are you sure you wanna continue?</span>
			
                <input className="button-logreg" type="submit" value="YES" />
				
			</form>
		</div>
	);
};

export default DeleteProfile;