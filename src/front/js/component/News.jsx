import React, { useContext, useEffect, useState } from "react";

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

import img from '../../img/imgnews.jpg'
import img2 from '../../img/img2news.jpg'
import logo from '../../img/LOGO.png'
import img3 from '../../img/img3news.jpg'
import img4 from '../../img/img4news.jpg'
import img5 from '../../img/img5news.jpg'
import img6 from '../../img/img6news.jpg'
import img7 from '../../img/img7news.jpg'
import img8 from '../../img/img8news.jpg'


const News=()=>{

    return (
    <div>
    
 <Container>
    <Row>
       <Col>
       <Card className='cardnews border-0'>
           <Card.Img variant="top" src={img3} />
           <Card.Body className='cardnews__main'>
               <Card.Title className='cardnews__title'>Official Holding Period 2021/2022</Card.Title>
                <Card.Text className='cardnews__text'>
                   <Link to='/newsdetail' className='cardnews__link'>
                      Big waves season is now open! Quiksilver returns to BIG WAVE Surfing in Hawaii (at Peáhi). Word´s Best Big Wave Surfers on Stanby for Nazaré and Jaws Competition windows open ow throught March 31, 2022.
                      You don´t really want to miss it!
                    </Link>  
                </Card.Text>
           </Card.Body>
           <Card.Footer className="cardnews__footer border-0">
             <small className="cardnews__date">06/12/2021</small>
           </Card.Footer>
           </Card>
       </Col>
       
       <Col>
       <Card className='cardnews border-0'>
    <Card.Img variant="top" src={img4} />
    <Card.Body className='cardnews__main'>
    <Card.Title className='cardnews__title'>Sharks Trust announces Mares and Scuba Schools International</Card.Title>
           <Card.Text className='cardnews__text'>
           <Link to='/newsdetail' className='cardnews__link'>
           The Shark Trust delighted to announce it lastest Corporate Patrons: Mares and Scuba Schools International. Are vital to work of the Shark Trust, together will promote the SHARK conservation.
           </Link>
           </Card.Text>
           </Card.Body>
           <Card.Footer className="cardnews__footer border-0">
<small className="cardnews__date">02/12/2021</small>
</Card.Footer>
           </Card>
       </Col>
       <Col>
       <Card className='cardnews border-0'>
    <Card.Img variant="top" src={img5} />
    <Card.Body className='cardnews__main'>
    <Card.Title className='cardnews__title'> World Champ Shaun Tomson Takes Note OF Euro Gramo Maldivian Score</Card.Title>
           <Card.Text className='cardnews__text'>
           <Link to='/newsdetail' className='cardnews__link'>
           “I don´t judge them, I just wanto to understand their behavior´, says surf coach Ze Seabra, in the latest episode of EDP´s Surf For Tomorrow titled Never Rest. 
           </Link>
           </Card.Text>
           </Card.Body>
           <Card.Footer className="cardnews__footer border-0">
<small className="cardnews__date">30/11/2021</small>
</Card.Footer>
           </Card>
       </Col>
    </Row>
    <Row>
       <Col>
       <Card className='cardnews border-0'>
    <Card.Img variant="top" src={img6} />
    <Card.Body className='cardnews__main'>
    <Card.Title className='cardnews__title'>Julie Ouimet Presided at the Video Jury of Underwater Photografy</Card.Title>
           <Card.Text className='cardnews__text'>
           <Link to='/newsdetail' className='cardnews__link'>
           BIn early October, Julie Ouimet N2Pix was invited to Preside over the Video jury of the CMAS World Champion ship of underwater Photography and Videography held in Porto Santo, Portugal.
           </Link>
           </Card.Text>
           </Card.Body>
           <Card.Footer className='cardnews__footer border-0'>
<small className="cardnews__date">27/11/2021</small>
</Card.Footer>
           </Card>
       </Col>
       
       <Col>
       <Card className='cardnews border-0'>
    <Card.Img variant="top" src={img7} />
    <Card.Body className='cardnews__main'>
    <Card.Title className='cardnews__title'>Back on the water! -whith Lous</Card.Title>
           <Card.Text className='cardnews__text'>
           <Link to='/newsdetail' className='cardnews__link'>
                 Annelous Lammerts is back on the water after recoveríng from an injury. What a way to celebrate!
                “The days are getting shorter, but that won´t stop Annelous from enjoying a sunset kite foil sesion”, coach said.
           </Link>
           </Card.Text>
           </Card.Body>
           <Card.Footer className='cardnews__footer border-0' >
<small className="cardnews__date">24/11/2021</small>
</Card.Footer>
           </Card>
       </Col>
       <Col>
       <Card className='cardnews border-0'>
    <Card.Img variant="top" src={img8} />
    <Card.Body className='cardnews__main'>
    <Card.Title className='cardnews__title'>CrazyFly Pure!</Card.Title>
           <Card.Text className='cardnews__text'>
           <Link to='/newsdetail' className='cardnews__link'>
           CrazyFly´s Pure is a pocket foil board unlike any other. Ultra-small with a pure minimalist design and extremely light wheight full carbon lyup without sacrifiving performance.
           </Link>
           </Card.Text>
           </Card.Body>
           <Card.Footer className='cardnews__footer border-0'>
                <small className="cardnews__date">20/11/2021</small>
          </Card.Footer>
           </Card>
       </Col>
    </Row> 
</Container>
</div>)
}



export default News