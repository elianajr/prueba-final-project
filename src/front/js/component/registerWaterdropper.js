import React , { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Redirect } from 'react-router';
import "../../styles/registerlogin.scss";


const RegisterWaterdropper = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, formState: { errors, isValid }, handleSubmit } = useForm({mode:"all"});

	const [passwordShown, setPasswordShown] = useState('');
	const [isRevealPwd, setIsRevealPwd] = useState(false);
	const hidePwdImg = "fas fa-eye-slash";
	const showPwdImg = "fas fa-eye";
	
	 
	const onSubmit = data => {
		console.log(data);
		actions.register(data);
		
	};

	const [formStep, setFormStep] = useState(0);


	const completeFormStep = () => {
		if (formStep === 2) return;
		setFormStep((page) => page + 1);
	  }




	return (
		<div className="register-login-form">
			<form className="register-login" onSubmit={handleSubmit(onSubmit)}>

				<div className="progressbar-regform">
        			<progress max="2" value={formStep} />
      			</div>

				<h2 className="tittle-logreg">JOIN TO WDS</h2>

				{formStep === 0 && ( 
				<section>

					<div className="form-input">
						<label htmlFor="email" className="label-relog">Email</label>
						<input
							type="text"
							name="email"
							id="email"
							placeholder="example@gmail.com"
							className="input-reglog"
							{...register("email", { required: true, pattern: /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
						/>
						{errors.email && errors.email.type === "required" && (
							<span className="error">Email is required</span>
						)}
						{errors.email && errors.email.type === "pattern" && (
							<span className="error">Format invalid</span>
						)}
					</div>

					<div className="form-input">
						<label htmlFor="password" className="label-relog">Password</label>
						<div className="form-group"></div>
						<div className="right-inner-addon input-container">
						<input
							type={isRevealPwd ? "text" : "password"}
							name="password"
							id="password"
							placeholder="password"
							autoComplete="current-password"
							className="input-reglog"
							onChange={e => setPasswordShown(e.target.value)}
							{...register("password", { required: true, minLength: 6 })}
							
						/>
						<i
						title={isRevealPwd ? "Hide password" : "Show password"}
						className={isRevealPwd ? hidePwdImg : showPwdImg}
						onClick={() => setIsRevealPwd(prevState => !prevState)}
						/>
						</div>
						
						{errors.password && errors.password.type === "required" && (
							<span className="error">Password is required</span>
						)}
						{errors.password && errors.password.type === "minLength" && (
							<span className="error">Password is too short</span>
						)}
					</div>

					<hr />

					<div className="form-input">
						<span className="label-relog">Which waterdropper are you?</span>
						<div className="form-check form-check-reglog">
							<input className="form-check-input" type="radio" name="userType" value="waterdropper" {...register("userType")} checked />
							<label className="form-check-label" htmlFor="waterdropper"> Athlete</label>
						</div>
						<div className="form-check form-check-reglog">
							<input className="form-check-input" type="radio" name="userType" value="center" {...register("userType")} disabled />
							<label className="form-check-label" htmlFor="center"> Center or school</label>
						</div>
						{errors.userType && errors.userType.type === "required" && (
									<span className="error">Role is required</span>
								)}
					</div>



					<div className="span-logreg">
						<span>Are you a center or school? 
							<Link className="link-logreg" to="/registerCenter">Sign up</Link>
						</span>
					</div>
				</section>
				)}

				{formStep === 1 && ( 
				<section>
                <div className="form-input" className="profile-photo-label">
						<label htmlFor="photo"><i className="fas fa-upload"></i>Choose a profile photo</label>
						<input type="file"
							id="photo" name="photo"
							accept="image/png, image/jpeg" className="profile-photo"
							{...register("photo", { required: false })}
						/>
					</div>

					<div className="form-input">
						<label htmlFor="username" className="label-relog">Username</label>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="username"
							className="input-reglog"
							{...register("username", { required: true })}
						/>
						{errors.username && errors.username.type === "required" && (
							<span className="error">Username is required</span>
						)}
					</div>

					<div className="form-input" >
						<span className="label-relog">Sports (check all that apply)</span>
						<div>
							<div className="form-check form-switch form-check-reglog">
							<input className="form-check-input" type="checkbox" id="scuba" name="sports" value="scuba" {...register("sports", { required: true })}/>
							<label className="form-check-label" htmlFor="scuba">Scuba diving</label>
							</div>
							<div className="form-check form-switch form-check-reglog">
							<input className="form-check-input" type="checkbox" id="surf" name="sports" value="surf" {...register("sports", { required: true })}/>
							<label className="form-check-label" htmlFor="surf">Surf</label>
							</div>
							<div className="form-check form-switch form-check-reglog">
							<input className="form-check-input" type="checkbox" id="kitesurf" name="sports" value="kitesurf" {...register("sports", { required: true })}/>
							<label className="form-check-label" htmlFor="kitesurf">Kitesurf</label>
							</div>
							<div className="form-check form-switch form-check-reglog">
							<input className="form-check-input" type="checkbox" id="snorkel" name="sports" value="snorkel" {...register("sports", { required: true })}/>
							<label className="form-check-label" htmlFor="snorkel">Snorkel</label>
							</div>
							{errors.sports && errors.sports.type === "required" && (
								<span className="error">Sport is required</span>
							)}
						</div>
					</div>

				</section>
				)} 

				{formStep === 2 && (
				<section>
					<div className="form-input"> 
						<label htmlFor="firstname" className="label-relog">Name</label>
						<input
							type="text"
							name="firstname"
							id="firstname"
							placeholder="Name"
							className="input-reglog"
							{...register("firstname", { required: true })}
						/>
						{errors.firstname && errors.firstname.type === "required" && (
							<span className="error">Name is required</span>
						)}
					</div>

					<div className="form-input">
						<label htmlFor="lastname" className="label-relog">Last name</label>
						<input
							type="text"
							name="lastname"
							id="lastame"
							placeholder="Last name"
							className="input-reglog"
							{...register("lastname", { required: true })}
						/>
						{errors.lastname && errors.lastname.type === "required" && (
							<span className="error">Last name is required</span>
						)}
					</div> 

					<div className="form-input">
						<label htmlFor="role" className="label-relog">Level</label>
						<select className="input-reglog" {...register("level", { required: true })}>
							<option value="">Choose an option...</option>
							<option value="beginner">Beginner</option>
							<option value="intermediate">Intermediate</option>
							<option value="advanced">Advanced</option>
							<option value="professional">Professional</option>
						</select>
						{errors.role && errors.role.type === "required" && (
								<span className="error">Role is required</span>
							)}
					</div>

					<div className="form-input">
						<label htmlFor="location" className="label-relog">Location</label>
						<input
							type="text"
							name="location"
							id="location"
							placeholder="Location"
							className="input-reglog"
							{...register("location", { required: true })}
						/>
						{errors.location && errors.location.type === "required" && (
							<span className="error">Location is required</span>
						)}
					</div> 

				</section>
				)}

				{formStep !== 2 && <button className="button-logreg" disabled={!isValid} onClick={completeFormStep}>Continue</button>}
				{formStep === 2 && (
					<button className="button-logreg" disabled={!isValid} type="submit">
					Submit
					</button>
				)}

			</form>
		</div>
	);
};

export default RegisterWaterdropper;