import Row from 'react-bootstrap/Row'
import React, { useContext, useEffect, useState } from "react";
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";
import News from "../component/News.jsx";
import Logo from "../component/Logo.jsx";
import '../../styles/news.scss'

import img from '../../img/imgnews.jpg'
import img2 from '../../img/img2news.jpg'


const Newsview=()=>{

   useEffect(()=>{
         
      Aos.init({duration:2000})
        
   },[])

    return (<div>
            <div className='news__header'>
    <h1 className='news__title'>NEWS</h1>
    <div>
    <img data-aos="fade-left" className='news__image' src={img}></img>
    
    <img data-aos="fade-right" className='news__subimage' src={img2}></img>
    </div>
 </div>
 <ul className='news__items'>
    <li>Discover the three more dangerous places to be surfing these days</li>
    <li>Horse surfing, the new sport or just a bad hobbie for the animal</li>
    <li>Under watter scooter, tecnology that could help people with disabilities to discover under the sea </li>
 </ul>

                  <Logo></Logo>
                  <News></News>
     
           </div>)
          

}


export default Newsview