import React, { useState, useEffect } from 'react';
import pizzaIcon from '../assets/images/pizza.png'; // Replace with your own path to the pizza icon


const Confirmation = () => {
    const [minutes, setMinutes] = useState(30);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return (
        <div className="confirmation">
            <img src={pizzaIcon} alt="Pizza" />
            <h2>Order Confirmed</h2>
            <h3>Your pizza will be delivered in {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h3>
        </div>
    );
}

export default Confirmation;
