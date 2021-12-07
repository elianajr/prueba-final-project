import React, { useContext, useEffect, useState } from "react";
import '../../styles/news.scss'
import img from '../../img/imgnews.jpg'
import img2 from '../../img/img2news.jpg'






const News=()=>{

    return (<div>
            <div className='news__header'>
            <h1 className='news__title'>NEWS</h1>
            <img className='news__image' src={img}></img>
            </div>
            <img className='news__subimage' src={img2}></img>
          
        </div>)
          

}


export default News