import React , { useState, useContext, useEffect, Fragment } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import "../../styles/registerlogin.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

const EditProfileWaterdropper = () => {
	const { store, actions } = useContext(Context);
	const [form, setForm] = useState()
	const { watch, register, getValues, formState: { errors, isValid }, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let params = useParams();

	const [passwordShown, setPasswordShown] = useState('');
	const [isRevealPwd, setIsRevealPwd] = useState(false);
	const hidePwdImg = "fas fa-eye-slash";
	const showPwdImg = "fas fa-eye";
  const result = {...store.getUserProfile.result};
  const user = {...store.getUserProfile.user};
  const sports = {...store.getUserProfile.sports}
	
	const onSubmit = (data) => {
    console.log(data);	
		actions.editProfile(data);	
	};

	useEffect(() => {
    console.log("aquii", result)
    console.log("user", user)
    console.log("sports", sports.name)
		setForm(
			<Fragment>
      <div className="container">
				<div className="row">
          <div className="col">
            <div className="form-input">
              <label htmlFor="email" className="label-relog">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                defaultValue={result.email}
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
          

            <div className="form-input">
              <label htmlFor="username" className="label-relog">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                className="input-reglog"
                defaultValue={result.username}
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
                <input className="form-check-input" type="checkbox" id="scuba" name="sports" value="scuba" {...register("sports")}/>
                <label className="form-check-label" htmlFor="scuba">Scuba diving</label>
                </div>
                <div className="form-check form-switch form-check-reglog">
                <input className="form-check-input" type="checkbox" id="surf" name="sports" value="surf" {...register("sports")}/>
                <label className="form-check-label" htmlFor="surf">Surf</label>
                </div>
                <div className="form-check form-switch form-check-reglog">
                <input className="form-check-input" type="checkbox" id="kitesurf" name="sports" value="kitesurf" {...register("sports")}/>
                <label className="form-check-label" htmlFor="kitesurf">Kitesurf</label>
                </div>
                <div className="form-check form-switch form-check-reglog">
                <input className="form-check-input" type="checkbox" id="snorkel" name="sports" value="snorkel" {...register("sports")}/>
                <label className="form-check-label" htmlFor="snorkel">Snorkel</label>
                </div>
                {errors.sports && errors.sports.type === "required" && (
                  <span className="error">Sport is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="col">
					  <div className="form-input"> 
              <label htmlFor="firstname" className="label-relog">Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                defaultValue={user.first_name}
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
                defaultValue={user.last_name}
                {...register("lastname", { required: true })}
              />
              {errors.lastname && errors.lastname.type === "required" && (
                <span className="error">Last name is required</span>
              )}
            </div> 

            <div className="form-input">
              <label htmlFor="role" className="label-relog">Level</label>
              <select className="input-reglog" defaultValue={user.level} {...register("level")}>
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
                defaultValue={user.location}
                {...register("location", { required: true })}
              />
              {errors.location && errors.location.type === "required" && (
                <span className="error">Location is required</span>
              )}
            </div> 

            <div className="form-input">
              <label htmlFor="instagram" className="label-relog"><i className="fab fa-instagram"></i></label>
              <input
                type="url"
                name="instagram"
                id="instagram"
                placeholder="instagram"
                className="input-reglog"
                defaultValue={result.instagram}
                {...register("instagram", { required: false })}
              />
            </div> 

            <div className="form-input">
              <label htmlFor="facebook" className="label-relog"><i className="fab fa-facebook-square"></i></label>
              <input
                type="url"
                name="facebook"
                id="facebook"
                placeholder="facebook"
                className="input-reglog"
                defaultValue={result.facebook}
                {...register("facebook", { required: false })}
              />
            </div> 

            <div className="form-input" className="profile-photo-label">
              <label htmlFor="photo"><i className="fas fa-upload"></i>Choose a profile photo</label>
              <input type="file"
                id="photo" name="photo"
                accept="image/png, image/jpeg" className="profile-photo"
                // defaultValue={result.photo}
                {...register("photo", { required: false })}
              />
            </div>

            <div className="form-input" className="profile-photo-label">
              <label htmlFor="cover-photo"><i className="fas fa-upload"></i>Choose a cover photo</label>
              <input type="file"
                id="cover-photo" name="cover-photo"
                accept="image/png, image/jpeg" className="profile-photo"
                // defaultValue={result.cover_photo}
                {...register("photo", { required: false })}
              />
            </div>

            <div className="form-input">
              <label htmlFor="about" className="label-relog">About</label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="about"
                className="input-reglog"
                defaultValue={result.about}
                {...register("about", { required: false })}
              />
            </div> 
          </div>
        </div>
      </div>
    <button className="button-logreg" type="submit">Update info</button>
    </Fragment>
    )
		
	}, [store.getUserProfile]);

	

	return (
		<div className="register-login-form">
		<form  onSubmit={handleSubmit(onSubmit)} className="register-login">
		{form}
		</form>
    <div>
        <Button onClick={handleOpen}>Delete account</Button>
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
                Are you sure do you want to delete your account?
                <Button type="submit">YES</Button>
            </Typography>
            </Box>
        </Modal>
    </div> 
    </div>
  );

};

export default EditProfileWaterdropper;