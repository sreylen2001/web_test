import React, { useState } from 'react';
import '../styles/Form.css';
import img2 from "../images/img-2.svg";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>

                    <img className='form-img' src={img2} alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ) : (
                    // eslint-disable-next-line react/jsx-no-undef
                    <FormSuccess />
                )}
            </div>
        </>
    );
};

export default Form;