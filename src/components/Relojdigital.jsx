import React from 'react'
import { useState, useEffect } from 'react';
import "../styles/RelojDigital.css";

const Relojdigital = () => {

    const [clockState, setClockState] = useState();

    useEffect(() =>{
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        },1000);
    }, []);

  return (
    <div className="relojDigital">
        <h3>Reloj Digital:</h3>
        <h2>{clockState}</h2>
    </div>
  )
}

export default Relojdigital