import React from 'react';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from "react";
import imageHome from "./imageHome";
import  "../styles/StyleHome.css";
import Button from 'react-bootstrap/Button'

export default function SliderHome() {

        const [width, setwidth] = useState(0);
        const carousel = useRef();

        useEffect(() => {
            setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

        }, []);

        return (
            <div className="slide_home">
                <motion.h3 animate={{ x:60 }}>Trending Places</motion.h3>
                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{cursor: "grabbing"}}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right:0, left: -width }}
                        className="inner-carousel"
                    >
                        {imageHome.map(image => {
                            return(
                                <motion.div
                                    className="item"
                                    key={image}
                                >
                                    <img src={image} alt={"city"}
                                    />
                                </motion.div>
                            );
                        })}

                    </motion.div>
                </motion.div>
            </div>
        );
}


