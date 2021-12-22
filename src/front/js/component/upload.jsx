import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";
import '../../styles/upload.scss'
import PropTypes from "prop-types";



const upload= props =>{
    const { store, actions } = useContext(Context);
    
   
    const [files, setFiles] = useState(null);

    const uploadImage = event => {
        event.preventDefault();
        // we are about to send this to the backend.
        let body = new FormData();
        body.append('profile_image', files[0]);
        const options = {
            body,
            method: "POST"
        };

        fetch(store.baseUrl.concat(props.element,props.num),options)
        .then(resp=>resp.json())
        .then(data=>console.log('Succes',data))
        .catch(error=>console.log('Error',error))

      
    }

   

    return(
        <div>
        <form onSubmit={uploadImage}> 
            
            <input id="inputfile" className="uploadinput" type="file" onChange={e => setFiles(e.target.files)} />
            <label htmlFor="inputfile" className="uploadinput__label">Add your photo</label>
            <button className="uploadinput__button">Upload</button>
            
        </form>
        </div>
    )
}

upload.propTypes= {
	element: PropTypes.string,
    num:PropTypes.string
	
}

export default upload