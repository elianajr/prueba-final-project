import React, { useContext, useState,useEffect } from "react";
import { Context } from "../store/appContext";
import '../../styles/upload.scss'



const upload= () =>{
    const { store, actions } = useContext(Context);
    const [currentuser,setCurrentuser]=useState('')
   
    useEffect( async ()=>{
        await actions.getUser(4)

    },[])

    useEffect(()=>{
        setCurrentuser(store.user)
    },[store.user])
   
    
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

        fetch(store.baseUrl.concat('accountphoto/',currentuser.id),options)
        .then(resp=>resp.json())
        .then(data=>console.log('Succes',data))
        .catch(error=>console.log('Error',error))

      
    }

   

    return(
        <div>
        <form onSubmit={uploadImage}> 
            
            <input id="inputfile" className="uploadinput" type="file" onChange={e => setFiles(e.target.files)} />
            <label for="inputfile" className="uploadinput__label">Add your photo</label>
            <button>Upload</button>
            <img src={currentuser.cover_photo}></img>
            
        </form>
        </div>
    )
}



export default upload