import React, { useContext, useEffect, useState } from "react";
import img from '../../img/crazyfly-pure.jpg'
import '../../styles/newsdetail.scss'
import Logo from "./Logo.jsx";
import ReactPlayer from "react-player";
import { Context } from "../store/appContext.js";
import sendicon from '../../img/icon-send.jpg'
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'




const Newsdetail=()=>{

  const { store, actions } = useContext(Context);

    
     const [counter,setCounter]=useState(0)
     const sendicon= <Icon icon="grommet-icons:send" color="#2cb1aa" width="50" height="50" />


    return (
    <div>
      
         <div  className='player__wrapper'>
            <div><img  className="player__backgroundimg" src={img}></img></div>
            <ReactPlayer 
                  className='reactplayer'
                  url='https://vimeo.com/116135968'
                  controls
                  width='70%'
                  height='70%'
             />
          </div>
           <div className='detailnews__main'>
              <h1 className='detailsnews__title'>CrazyFly Pure</h1>
              <br></br>
              <p className='detailsnews__description'>CrazyFly’s Pure is a pocket foil board unlike any other. Ultra-small with a pure minimalist design and extremely lightweight full carbon layup without sacrificing performance. In its mid-size, 88 x 43 cm, the Pure board with full deck pad weighs an incredible 1,58 kg, making it the lightest foil board in the world.
            The Pure is a masterpiece of extreme lightweight engineering with air inside core technology and demonstrates the outstanding expertise of CrazyFly in all areas of carbon-fibre technology.</p>

               <p className="detailsnews__description">Find out more right here!</p>

               <p className="detailsnews__description">Mon 22nd Nov, 2021 @ 3:00 pm</p>
        </div>
        <div className="comments__counter">
        <p> {counter} Comments</p>
        </div>
        <Logo></Logo>
        <form>
        <div className="comments__wrapper">
        <img className="user__img" ></img>
        
        <div className="comments__container">
            <input type="text" placeholder="Start the discussion..." className="comments__input" />
            <div className="comments__containerbutton">
                <button type="submit" value="" className="comments__button" onClick={(e)=>{e.preventDefault()}}>{sendicon}</button>
            </div>
            
        </div>
      </div>
      </form>
      <button className="backbutton">
        <Link className="backbutton__link" to='/news'>GO BACK</Link>
       </button>
      
    </div>
        )
}


export default Newsdetail