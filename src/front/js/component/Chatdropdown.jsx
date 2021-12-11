import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";



const Chatdropdown=()=>{

    const { store, actions } = useContext(Context);

    const [currentUser,setCurrentUser]=useState(store.user)

    console.log(store.user)

    return (<div>
           
    </div>)
}

export default Chatdropdown