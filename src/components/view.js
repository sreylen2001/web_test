import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image4 from '../images/preas.jpg'
import image5 from '../images/Angkor.jpg'
import image6 from '../images/kompot.jpg'
import image7 from '../images/kohrong.jpg'
import image8 from '../images/kompong1.jpg'
import image9 from '../images/a1.jpg'
import image10 from '../images/a2.jpg'
import a3 from '../images/a3.jpg'
import a4 from '../images/a4.jpg'
import a5 from '../images/a5.jpg'
import a6 from '../images/a6.jpg'
import a7 from '../images/a7.jpg'
import a8 from '../images/a8.jpg'
import '../styles/view.css'
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

function View(props) {
    return (
        <>
            {/*city-list start*/}
            <div className="title-drope">
                <motion.h3 animate={{ x:5 }}>All Provinces In Cambodia</motion.h3>
                <div className="contain-title">
                    <div className="row">
                        <div className="col-md-2 card-hover">
                            <img className="image-edit" src={image5} alt="" width={212} height={212}/>
                            <Link to="#">Angkor Wat</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image6} alt="" width={212} height={212}/>
                            <Link to="/province">Kompot</Link>
                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image7} alt="" width={212} height={212}/>
                            <Link to="#">Koh Rong</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image8} alt="" width={212} height={212}/>
                            <Link to="#">Kompong Cham</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image9} alt="" width={212} height={212}/>
                            <Link to="#">Kompong Thom</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image10} alt="" width={212} height={212}/>
                            <Link to="#">Prey Veng</Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="title-drope">
                <div className="contain-title">
                    <div className="row">
                        <div className="col-md-2 card-hover">
                            <img className="image-edit" src={image4} alt="" width={212} height={212}/>
                            <Link to="#">Koh Kong</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={a3} alt="" width={212} height={212}/>
                            <Link to="#">Tah Keo</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={a4} alt="" width={212} height={212}/>
                            <Link to="#">Phnom Penh</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={a5} alt="" width={212} height={212}/>
                            <Link to="#">Kean Svay</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={a6} alt="" width={212} height={212}/>
                            <Link to="#">Toul Kork</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={a7} alt="" width={212} height={212}/>
                            <Link to="#">Chroy Changvar</Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="title-drope">
                <div className="contain-title">
                    <div className="row">
                        <div className="col-md-2 card-hover">
                            <img className="image-edit" src={a8} alt="" width={212} height={212}/>
                            <Link to="#">Chamka Moun</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image6} alt="" width={212} height={212}/>
                            <Link to="#">Boeng Keng Kang</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image7} alt="" width={212} height={212}/>
                            <Link to="#">Daun Penh</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image8} alt="" width={212} height={212}/>
                            <Link to="#">7 Makara</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image9} alt="" width={212} height={212}/>
                            <Link to="#">Kompong Speu</Link>

                        </div>
                        <div className="col-md-2 card-hover ">
                            <img className="image-edit" src={image10} alt="" width={212} height={212}/>
                            <Link to="#">Chroy Changvar</Link>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default View;