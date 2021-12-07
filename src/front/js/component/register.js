import React , { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";


const Register = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, formState: { errors, isValid }, handleSubmit } = useForm({mode:"all"});

	const [passwordShown, setPasswordShown] = useState('');
	const [isRevealPwd, setIsRevealPwd] = useState(false);
	const hidePwdImg = "fas fa-eye-slash";
	const showPwdImg = "fas fa-eye";
	
	 
	const onSubmit = data => {
		console.log(data);
		alert("Your account has been created");
		actions.register(data);
		
	};

	const [formStep, setFormStep] = useState(0);

	const completeFormStep = () => {
		if (formStep < 1) {
			setFormStep(cur => cur + 1)
		} else {
			return null;
		}
	}
	
	// const renderButton = () => {
	// 	if (formStep <= 1) {
	// 		return (<input className="button" type="submit" disabled={!isValid} onClick={completeFormStep} value="Create account" />)
	// 	} else {
	// 		return null;
	// 	}
	// }




	return (
		<div className="register-login">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2 className="tittle-logreg">JOIN TO WDS</h2>

				{formStep === 0 && ( 
				<section>
				<div className="form-input">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						placeholder="example@gmail.com"
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
					<label htmlFor="password" className="">Password</label>
					<div className="form-group"></div>
					<div className="right-inner-addon input-container">
					<input
						type={isRevealPwd ? "text" : "password"}
						name="password"
						id="password"
						placeholder="password"
						autoComplete="current-password"
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

				{/* <div className="submit-btn">
					<input type="submit" value="Continue" />
				</div> */}
				<div className="span-logreg">
				<span>Already a member?
					<Link className="link-logreg" to="/login">Sign in</Link>
				</span>
				</div>
				</section>
				)}

				{formStep === 1 && ( 
				<section>
				<div className="form-input">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="username"
						{...register("username", { required: true })}
					/>
					{errors.username && errors.username.type === "required" && (
						<span className="error">Username is required</span>
					)}
				</div>
				
				{/* <div className="form-input">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="Name"
						id="Name"
						placeholder="name"
						{...register("Name", { required: true })}
					/>
					{errors.Name && errors.Name.type === "required" && (
						<span className="error">Name is required</span>
					)}
				</div>

				<div className="form-input">
					<label htmlFor="lastname">Last name</label>
					<input
						type="text"
						name="lastname"
						id="lastame"
						placeholder="Last name"
						{...register("Name", { required: true })}
					/>
					{errors.lastname && errors.lastame.type === "required" && (
						<span className="error">Last Name is required</span>
					)}
				</div> */}

				<div className="form-input">
					<label htmlFor="sport">Sport</label>
					{/* <input
						type="text"
						name="sport"
						id="sport"
						placeholder="sport"
						{...register("sport", { required: true })}
					/> */}
					<select {...register("sport")}>
						<option value="">Choose an option...</option>
						<option value="scuba">Scuba diving</option>
						<option value="surf">Surf</option>
						<option value="kitesurf">Kitesurf</option>
						<option value="snorkel">Snorkel</option>
					</select>
					{errors.sport && errors.sport.type === "required" && (
						<span className="error">Sport is required</span>
					)}
				</div>

				<div className="form-input">
					<label htmlFor="role">What kind of Waterdropper are you?</label>
					<select {...register("role")}>
						<option value="">Choose an option...</option>
						<option value="athlete">Athlete</option>
						<option value="center">Center or school</option>
					</select>
					{errors.role && errors.role.type === "required" && (
							<span className="error">Role is required</span>
						)}
				</div>
				</section>
				)} 

				{/* <input className="button" type="submit" value="Create account" />  */}
				<input className="button" type="submit" disabled={!isValid} onClick={completeFormStep} value="Create account" />

				{/* {formStep === 2 && (
					<h5 className="congratulations">Congratulations your account has been created!</h5>
				)} */}

				{/* {renderButton()} */}

				{/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
			</form>
		</div>
	);
};

export default Register;

// import React, { useContext } from "react";
// import { useForm } from "react-hook-form";
// import { Context } from "../store/appContext";

// import "../../styles/index.scss";

// const Register = () => {
// 	const { store, actions } = useContext(Context);
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors }
// 	} = useForm();

// 	const onSubmit = data => actions.register(data);

// 	return (
// 		<form onSubmit={handleSubmit(onSubmit)}>
// 			<label htmlFor="email">Email</label>
// 			<input
// 				id="email"
// 				aria-invalid={errors.email ? "true" : "false"}
// 				{...register("email", { required: true, maxLength: 30 })}
// 			/>
// 			{errors.email && errors.email.type === "required" && <span role="alert">This is required</span>}
// 			{errors.email && errors.email.type === "maxLength" && <span role="alert">Max length exceeded</span>}

// 			<label htmlFor="password">Password:</label>
// 			<input
// 				id="password"
// 				type="password"
// 				aria-invalid={errors.name ? "true" : "false"}
// 				{...register("password", { required: true, minLength: 5 })}
// 			/>
// 			{errors.password && errors.password.type === "minLength" && <span role="alert">Need atleast 5 characters</span>}

// 			<input type="submit" />
// 		</form>
// 	);
// };

// export default Register;

