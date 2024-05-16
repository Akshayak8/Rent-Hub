import React from "react";
import { Link, Outlet } from "react-router-dom";
import Laptop from "./images/Electronics/Lapotop.jpeg";
import Camera from "./images/Electronics/Camera.jpeg";
import Speakers from "./images/Electronics/Speakers.jpg";
import Drons from "./images/Electronics/Drons.jpg";

export default function Electronics() {
  return (
    <div>
      <div>
        <div className="banner">
          <Link to="/Electronics/Device">Laptop</Link>
          <Link to="/Electronics/Device">Camera</Link>
          <Link to="/Electronics/Device">Speakers</Link>
          <Link to="/Electronics/Device">Drons</Link>
        </div>
        <div class="rent-card">
          <div class="rent-flex">
            <div class="vehical">
              <h1>Laptop</h1>
              <img src={Laptop} alt="image" />
            </div>
            <div class="vehical">
              <h1>Camera</h1>
              <img src={Camera} alt="image" />
            </div>
            <div class="vehical">
              <h1>Speakers</h1>
              <img src={Speakers} alt="image" />
            </div>
            <div class="vehical">
              <h1>Drons</h1>
              <img src={Drons} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
