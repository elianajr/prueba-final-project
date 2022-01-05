import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";
import '../../styles/upload.scss'
import PropTypes from "prop-types";
import '../../styles/inputphoto.scss'
import { Icon } from '@iconify/react';



const upload=(props) =>{
    const { store, actions } = useContext(Context);
    
   
    const [files, setFiles] = useState(null);
    const setimage=()=>{
		props.changefiles(files)
	}

    useEffect(()=>{
        setimage()
        
    },[files])


    return(
        <div>   
        <input id="inputphoto" className="uploadinput__addphoto" accept=".jpg,.png" type="file" onChange={(e)=>{setFiles(e.target.files[0])}}/>
       <label htmlFor="inputphoto" className="uploadinput__labelphoto">Add a photo</label>
       {files? <Icon icon="ci:check" color="#1976d2" width="200" height="200" />:''}
       <hr></hr>
       </div>
    )
}
upload.propTypes = {
     
    changefiles:PropTypes.func
};


export default upload