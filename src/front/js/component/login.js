import React , { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";


const Login = () => {
	const { store, actions } = useContext(Context);
	const { watch, register, formState: { errors }, handleSubmit } = useForm({mode:"all"});
	// const history = useHistory();
	const navigate = useNavigate();

	const [passwordShown, setPasswordShown] = useState('');
	const [isRevealPwd, setIsRevealPwd] = useState(false);
	const hidePwdImg = "fas fa-eye-slash";
	const showPwdImg = "fas fa-eye";


	
	const onSubmit = data => {
		console.log(data);
		actions.login(data);
		// .then(() => {
		// 	history.pushState("/")
		// })
	};

	const token = localStorage.getItem("token");
	if(store.token && store.token !="" && store.token != null) {navigate("/")};


	return (
		<div className="register-login-form">
			<form className="register-login" onSubmit={handleSubmit(onSubmit)}>
				<h2 className="tittle-logreg">SIGN IN TO WDS</h2>

				<div className="form-group">
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
				<div className="form-group">
					<label htmlFor="password" className="label-relog">Password</label>
					<div className="right-inner-addon input-container">
					<input
						className="input-password input-reglog"
						type={isRevealPwd ? "text" : "password"}
						name="password"
						id="password"
						placeholder="password"
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
			
				<div className="span-logreg">
				<span>Not a member?
					<Link className="link-logreg" to="/register">Sign up</Link>
				</span>
				</div>
				
                <input className="button-logreg" type="submit" value="Continue" />
				
			</form>
		</div>
	);
};

export default Login;

