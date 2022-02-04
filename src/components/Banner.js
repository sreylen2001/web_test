import React from "react";
import "../styles/Head.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import lii from "../images/lii(1).png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GridPri from "./GridPri";
import CarouselBlog from "./CarouselBlog";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export default function Banner(){
    return (
        <div>
            <Container>
                <figure className="position-relative">
                    <img src={lii} alt={"background_ban"} className="img-fluid"/>

                    <div className="le_ban">
                        <Row className="py-3">
                            <Col xs={6} className="text-justify">
                                <h3 className="text-center">MISSION</h3>
                                <hr/>
                                <h4>- To promote the Cambodian tourism industry.
                                    <br/>
                                    <br/>
                                    - To develop resources on Cambodian tourism.
                                    <br/>
                                    <br/>
                                    - To conduct training programs for human resources in tourism.
                                </h4>
                            </Col>
                            <Col xs={6}>
                                <CarouselBlog />
                            </Col>
                        </Row>
                    </div>

                    <div className="le_second">
                        <h3 className="text-center py-2">OUR SERVICE</h3>
                        <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy.
                            Just click “Edit Text” or double click me to add your own content and
                            make changes to the font. I’m a great place for you to tell a story
                            and let your users know a little more about you.
                        </p>
                        <GridPri />
                    </div>

                    <div className="le_third">
                        <Row className="py-3">
                            <Col xs={6}>xs=6


                            </Col>
                            <Col xs={6}>
                                <Button variant="primary" size="lg" className="py-2" disabled>
                                    Trouvaille Office Location
                                </Button>
                                <p className="text-justify py-4">
                                    #217 Monivong Blvd, Khan Daun Penh,
                                    Phnom Penh, Kingdom of Cambodia
                                    <br/>
                                    <br/>
                                    Trouvaille@mysite.com
                                    <br/>
                                    <br/>
                                    Tel: (+855) 91 234 567
                                </p>

                            </Col>
                        </Row>


                    </div>
                </figure>

            </Container>
        </div>
    );
}

