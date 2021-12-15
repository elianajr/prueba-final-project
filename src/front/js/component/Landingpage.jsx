import React, { useContext } from "react";

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


const Landingpage=()=>{

    const surf = <img src="https://i.ibb.co/ssMzJnP/mdi-kitesurfing.png" alt="surf"/>
	const snorkel = <img src="https://i.ibb.co/JBVt1Tt/mdi-diving-snorkel.png" alt="snorkel"/>
	const kitesurf = <img src="https://i.ibb.co/GVKWPVT/map-surfing.png" alt="kitesurf"/>
	const diving = <img src="https://i.ibb.co/pfCWKG5/mdi-diving-helmet.png" alt="diving"/>

    

    


    return (<div>
               <div className="Landingpage__header">
               <img className="Landingpage__logo" src={logo}></img>
               <div className="Landingpage__title">Water Drop Sports</div>
               </div>
               <div className="Landingpage__buttons">
                   <button className="Landingpage__button">{surf}SURF</button>
                   <button className="Landingpage__button">{snorkel}SNORKEL</button>
                   <button className="Landingpage__button">{kitesurf}KITESURF</button>
                   <button className="Landingpage__button">{diving}DIVING</button>
               </div>
               <div className="Landingpage__main">
                    <img className="Landingpage__mainimg" src={image}></img>
               </div>
               <Container>
               <Row className="Laindingpage__Cards">
               <Col md={3}>
                       <Card className="Landingpage__Card">
                              <Card.Img variant="top" src={image2} />
                              <Card.Body>
                              <Card.Title>Your places</Card.Title>
                              <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                              </Card.Text>
                            </Card.Body>
                        </Card>
                   </Col>

                   <Col md={3}>
                         <Card className="Landingpage__Card">
                               <Card.Img variant="top" src={image3} />
                               <Card.Body>
                                 <Card.Title>Your people</Card.Title>
                                 <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                                 </Card.Text>
                               </Card.Body>
                          </Card>
                    </Col>                 
                 
                    <Col md={3}>
                          <Card className="Landingpage__Card">
                               <Card.Img variant="top" src={image4} />
                               <Card.Body>
                                 <Card.Title>Your centers</Card.Title>
                                 <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                                 </Card.Text>
                               </Card.Body>
                         </Card>
                    </Col>
               </Row>

               </Container>
               
              
               <button className="Landingpage__startbutton">Get started</button>
 
              
        </div>)
}

export default Landingpage