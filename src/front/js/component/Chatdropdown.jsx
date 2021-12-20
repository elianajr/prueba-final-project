import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import '../../styles/chatdropdown.scss'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'

import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";





const Chatdropdown=()=>{

    const { store, actions } = useContext(Context);

       const [currentuser,setCurrentuser]=useState('')
       const [users,setUsers]=useState([])

  
    useEffect( async()=>{
       // await actions.getUser(2)
        await actions.getUsers()
        
    },[])

    useEffect(()=>{
        setCurrentuser(store.user)
    },[store.user])

    useEffect(()=>{
        let otherusers=store.users.filter(element=>element.id!=currentuser.id)
        setUsers(
            otherusers.map((element,index)=>{
                return <div key={index.toString()}>
                    <img className="chatdropdown__usersimg" src={element.cover_photo}></img>
                    <span>{element.username}</span>
                    <hr></hr>
                    </div>
            })
        )
    },[store.users])

    
    

    return (<div className="chatdropdown__box">
        <img className="chatdropdown__userimg" src={currentuser.cover_photo}></img>
        <span > <Link to='/chat' className="chatdropdown__text">Messages</Link></span>
        
        {/* <Popup trigger={<Icon className="chatdropdown__popup__chat" icon="bi:chat-dots" />} >
        <div>Popup content here !!</div>
        </Popup>
        <Popup trigger={<Icon className="chatdropdown__popup__arrow" icon="bi:arrow-up-circle" />} position="top right">
        <div>{users}</div>
        </Popup> */}
           
    </div>)
}

export default Chatdropdown