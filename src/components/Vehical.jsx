import React from "react";
import { Link, Outlet } from "react-router-dom";
import Cars from "./images/Vehicals/cars.jpeg";
import Bikes from "./images/Vehicals/Bikes.jpeg";
import Goods from "./images/Vehicals/Goods.jpeg";
import Travels from "./images/Vehicals/Travels.jpeg";

function Vehical() {
  return (
    <div>
      <div>
        <div className="banner">
          <Link to="/Vehical/Cars">Cars</Link>
          <Link to="/Vehical/Bikes">Bikes</Link>
          <Link to="/Vehical/Goods">Goods</Link>
          <Link to="/Vehical/Travels">Travels</Link>
        </div>
        <div class="rent-card">
          <div class="rent-flex">
            <div class="vehical">
              <h1>Cars</h1>
              <img src={Cars} alt="image" />
            </div>
            <div class="vehical">
              <h1>Bikes</h1>
              <img src={Bikes} alt="image" />
            </div>
            <div class="vehical">
              <h1>Goods</h1>
              <img src={Goods} alt="image" />
            </div>
            <div class="vehical">
              <h1>Travels</h1>
              <img src={Travels} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Vehical;
