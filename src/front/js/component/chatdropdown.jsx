import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import '../../styles/chatdropdown.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";





const Chatdropdown=()=>{

    const { store, actions } = useContext(Context);

       const [currentuser,setCurrentuser]=useState('')

  
    useEffect( async()=>{

        const decoded=(jwt_decode(localStorage.getItem('token')))
		
        await actions.getUser(decoded.sub.id)
      
        
    },[])

    useEffect(()=>{
        setCurrentuser(store.user)
    },[store.user])

   

    return (<div className="chatdropdown__box">
        <img className="chatdropdown__userimg" src={currentuser.photo}></img>
        <span > <Link to='/chat' className="chatdropdown__text">Messages</Link></span>
    </div>)
}

export default Chatdropdown;