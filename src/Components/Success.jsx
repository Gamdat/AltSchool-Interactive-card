import React from "react";
import './Success.css';

export default function Sucess({onContinue}) {
    return(
        <div className="success-msg">
            <h2>Thank You!</h2>
            <p>We've added your card details</p>
            <button onClick={onContinue}>Continue</button>
        </div>
    )
}