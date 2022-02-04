import React from "react";
import '../Slider/Ban.css';
import leftArrow from "../Slider/icons/left-arrow.svg";
import rightArrow from "../Slider/icons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
    console.log(direction, moveSlide);
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={direction === "next" ? rightArrow : leftArrow}  alt="pic"/>
        </button>
    );
}