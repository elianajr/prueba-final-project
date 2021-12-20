




// } else if (getValues("userType") == "center") {
//     setRegisterForm(
//         <Fragment>
//             <div className="form-input" className="profile-photo-label">
//                 <label htmlFor="photo"><i className="fas fa-upload"></i>Choose a profile photo</label>
//                 <input type="file"
//                     id="photo" name="photo"
//                     accept="image/png, image/jpeg" className="profile-photo"
//                     {...register("photo", { required: false })}
//                 />
//             </div>

//             <div className="form-input">
//                 <label htmlFor="username" className="label-relog">Username</label>
//                 <input
//                     type="text"
//                     name="username"
//                     id="username"
//                     placeholder="username"
//                     className="input-reglog"
//                     {...register("username", { required: true })}
//                 />
//                 {errors.username && errors.username.type === "required" && (
//                     <span className="error">Username is required</span>
//                 )}
//             </div>

//             <div className="form-input">
//                 <span className="label-relog">Sports (check all that apply)</span>
//                 <div>
//                     <input type="checkbox" id="scuba" name="sports" value="scuba" {...register("sports")}/>
//                     <label htmlFor="scuba">Scuba diving</label>
//                     <input type="checkbox" id="surf" name="sports" value="surf" {...register("sports")}/>
//                     <label htmlFor="surf">Surf</label>
//                     <input type="checkbox" id="kitesurf" name="sports" value="kitesurf" {...register("sports")}/>
//                     <label htmlFor="kitesurf">Kitesurf</label>
//                     <input type="checkbox" id="snorkel" name="sports" value="snorkel" {...register("sports")}/>
//                     <label htmlFor="snorkel">Snorkel</label>
//                     {errors.sports && errors.sports.type === "required" && (
//                         <span className="error">Sport is required</span>
//                     )}
//                 </div>
//             </div>
            
//             <div className="form-input">
//             <label htmlFor="address" className="label-relog">Address</label>
//             <input
//                 type="text"
//                 name="address"
//                 id="address"
//                 placeholder="address"
//                 className="input-reglog"
//                 {...register("address", { required: true })}
//             />
//             {errors.address && errors.address.type === "required" && (
//                 <span className="error">Address is required</span>
//             )}
//         </div> 

//         <div className="form-input">
//             <label htmlFor="phone" className="label-relog">Phone</label>
//             <input
//                 type="text"
//                 name="phone"
//                 id="phone"
//                 placeholder="phone"
//                 className="input-reglog"
//                 {...register("phone", { required: true })}
//             />
//             {errors.phone && errors.phone.type === "required" && (
//                 <span className="error">Phone is required</span>
//             )}
//         </div>

//         <div className="form-input">
//             <label htmlFor="web" className="label-relog">Web</label>
//             <input
//                 type="text"
//                 name="web"
//                 id="web"
//                 placeholder="web"
//                 className="input-reglog"
//                 {...register("web", { required: true })}
//             />
//             {errors.web && errors.web.type === "required" && (
//                 <span className="error">Web is required</span>
//             )}
//         </div>