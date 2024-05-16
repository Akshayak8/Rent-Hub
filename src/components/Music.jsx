import React from "react";
import { Link, Outlet } from "react-router-dom";
import Guiter from "./images/Musical/guitar.jpeg";
import Cajon from "./images/Musical/Cajon.jpg";
import Drums from "./images/Musical/Drums.png";
import Harmoniam from "./images/Musical/Harmoniam.jpg";
import Pianos from "./images/Musical/pianos.jpg";
import Tabala from "./images/Musical/Tabala.jpg";
import Violine from "./images/Musical/Violine.jpg";
function Music() {
  return (
    <div>
      <div className="banner">
        <Link to="/Music/Instruments">Guiter</Link>
        <Link to="/Music/Instruments">Cajon</Link>
        <Link to="/Music/Instruments">Drums</Link>
        <Link to="/Music/Instruments">Harmoniam</Link>
        <Link to="/Music/Instruments">Pianos</Link>
        <Link to="/Music/Instruments">Tabala</Link>
        <Link to="/Music/Instruments">Violine</Link>
      </div>
      <div class="rent-card">
        <div class="rent-flex">
          <div class="vehical">
            <h1>Guiter</h1>
            <img src={Guiter} alt="image" />
          </div>
          <div class="vehical">
            <h1>Cajon</h1>
            <img src={Cajon} alt="image" />
          </div>
          <div class="vehical">
            <h1>Drums</h1>
            <img src={Drums} alt="image" />
          </div>
          <div class="vehical">
            <h1>Harmoniam</h1>
            <img src={Harmoniam} alt="image" />
          </div>
          <div class="vehical">
            <h1>Pianos</h1>
            <img src={Pianos} alt="image" />
          </div>
          <div class="vehical">
            <h1>Tabala</h1>
            <img src={Tabala} alt="image" />
          </div>
          <div class="vehical">
            <h1>Violine</h1>
            <img src={Violine} alt="image" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Music;
