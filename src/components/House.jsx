import React from "react";
import { Link, Outlet } from "react-router-dom";
import Hotels from "./images/Houses/Hotels.jpeg";
import Hostels from "./images/Houses/Hostels.jpeg";
import BHKflat from "./images/Houses/2BHK-flat.jpeg";

function House() {
  return (
    <div>
      <div>
        <div className="banner">
          <Link to="/House/Rooms">Hotels</Link>
          <Link to="/House/Rooms">Hostels</Link>
          <Link to="/House/Rooms">2BHK-flat</Link>
        </div>
        <div class="rent-card">
          <div class="rent-flex">
            <div class="vehical">
              <h1>Hotels</h1>
              <img src={Hotels} alt="image" />
            </div>
            <div class="vehical">
              <h1>Hostels</h1>
              <img src={Hostels} alt="image" />
            </div>
            <div class="vehical">
              <h1>2BHK-flat</h1>
              <img src={BHKflat} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default House;
