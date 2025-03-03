import React from "react";
import '../styles/header.css'
import awningPic from '../assets/awning1.png'


function Header() {
  return (
    <header>
      <img src={awningPic} alt="Awning" className="awning" />
      <h1>CampusBites</h1>
    </header>
  );
}

export default Header;
