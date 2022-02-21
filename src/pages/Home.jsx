import React from 'react'
import { useState, useEffect } from 'react';
import Relojdigital from '../components/Relojdigital'
import CuentaAtras from '../components/CuentaAtras'
import Cronometro from '../components/Cronometro'
import "../styles/Home.css"
const Home = () => {

  return (
    <div className="home-div">
        <Relojdigital/>
        <CuentaAtras/>
        <Cronometro/>
    </div>
  )
}

export default Home