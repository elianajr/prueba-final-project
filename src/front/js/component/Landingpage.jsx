import React, { useContext, useEffect } from "react";

import logo from '../../img/LOGO.png'
import '../../styles/landingpage.scss'
import image from '../../img/imglandingpage.png'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import image2 from '../../img/img2landingpage.png'
import image3 from '../../img/img3landingpage.png'
import image4 from '../../img/img4landingpage.png'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Aos from "aos";
import 'aos/dist/aos.css'


const Landingpage=()=>{

   useEffect(()=>{
     Aos.init({duration:2000})
   },[])



    return (<div>
               <div className="Landingpage__header">
               <img className="Landingpage__logo" src={logo}></img>
               <div className="Landingpage__title">Water Drop Sports</div>
               </div>
               <div className="Landingpage__buttons">
                   <button className="Landingpage__button"><Icon className="Landingpage__icon" icon="map:surfing" color="#006184" width="80" height="80" />SURF</button>
                   <button className="Landingpage__button"><Icon className="Landingpage__icon" icon="mdi:diving-snorkel" color="#006184" width="80" height="80" />SNORKEL</button>
                   <button className="Landingpage__button"><Icon className="Landingpage__icon" icon="mdi:kitesurfing" color="#006184" width="80" height="80" />KITESURF</button>
                   <button className="Landingpage__button"><Icon className="Landingpage__icon" icon="mdi:diving-helmet" color="#006184" width="80" height="80" />DIVING</button>
               </div>
               <div className="Landingpage__main">
                    <img className="Landingpage__mainimg" src={image}></img>
               </div>
               <Container>
               <Row className="Laindingpage__Cards">
               <Col md={3}>
                       <Card data-aos="fade-right" className="Landingpage__Card">
                              <Card.Img className="Landingpage__Cardimg" variant="top" src={image2} />
                              <Card.Body className="Landingpage__Cardbody">
                              <Card.Title className="Landingpage__Cardtitle">Your places</Card.Title>
                              <Card.Text className="Landingpage__Cardtext">
                              Here you will find all the places you will always hear about and no one explain you how to find with all the info you need to check if suit your needs.
                              </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>

                   <Col md={{ span: 3, offset: 1 }}>
                         <Card data-aos="fade-up" className="Landingpage__Card">
                               <Card.Img className="Landingpage__Cardimg" variant="top" src={image3} />
                               <Card.Body className="Landingpage__Cardbody">
                                 <Card.Title className="Landingpage__Cardtitle">Your people</Card.Title>
                                 <Card.Text className="Landingpage__Cardtext">
                                    You don´t find any one to go tomorrow to have an amazing day of Scuba Dive...
                                    Don´t worry! Here you will find lots of people with the same likes and also you can check the level of your partner. 
                                 </Card.Text>
                               </Card.Body>
                          </Card>
                    </Col>                 
                 
                    <Col md={{ span: 3, offset: 1 }}>
                          <Card data-aos="fade-left" className="Landingpage__Card">
                               <Card.Img className="Landingpage__Cardimg" variant="top" src={image4} />
                               <Card.Body className="Landingpage__Cardbody">
                                 <Card.Title className="Landingpage__Cardtitle">Your centers</Card.Title>
                                 <Card.Text className="Landingpage__Cardtext">
                                   All the School Centers and Business dedicated to this amazing world have a places here too.
                                   We offer you a acurated description about thoses places. 
                                 </Card.Text>
                               </Card.Body>
                         </Card>
                    </Col>
               </Row>

               </Container>
               
              
               <button className="Landingpage__startbutton"><Link className="Landingpage__startbuttonlink" to="/">GET STARTED</Link></button>
 
              
        </div>)
}

export default Landingpage