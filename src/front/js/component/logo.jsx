import logo from '../../img/LOGO.png'
import React, { useContext, useEffect, useState } from "react";
import '../../styles/logo.scss'


const Logo=()=>{
    return(
         <div className='pagedivider'>
    <div className='logo__divider'></div>
    <img className='logowdp__icon' src={logo}></img>
    <div className='logo__divider'></div>
   </div>
    )

   
}

export default Logo