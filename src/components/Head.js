import React from 'react';
import {Container} from "react-bootstrap";
import kak from "../images/kak.png";



export default function Head(){
    return (
        <div>
            <Container>
                <figure className="position-relative">
                    <img src={kak} alt={"background_img"} className="img-fluid"/>

                </figure>

            </Container>
        </div>
    );
}

