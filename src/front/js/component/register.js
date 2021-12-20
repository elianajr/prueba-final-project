import React , { useState, useContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";


const Register = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, getValues, formState: { errors, isValid }, handleSubmit } = useForm();
	


	return (

		<div className="register-login-form">
			<div className="register-login">
				<h2 className="tittle-logreg">JOIN WDS</h2> 
				
				<div className="form-input">
					<span className="label-reg">What kind of waterdropper are you?</span>
					
					<button className="button-logreg">
						<Link className="button-home-reg" to="/register-waterdropper">Athlete</Link>
					</button>
					<button className="button-logreg">
						<Link className="button-home-reg" to="/register-center">Center or school</Link>
					</button>
				</div>
				<hr />
				<div className="span-logreg">
					<span>Are you a member? 
						<Link className="link-logreg" to="/register-waterdropper">Sign in</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Register;

