import React from "react";
import { Link, Outlet } from "react-router-dom";
import Function from "./images/Event/Function.jpeg";
import Conference from "./images/Event/Conference.jpeg";
import Bars from "./images/Event/Bars.jpeg";

const Event = () => {
  return (
    <div>
      <div>
        <div className="banner">
          <Link to="/Event/Function">Function Hall</Link>
          <Link to="/Event/Function">Conference Hall</Link>
          <Link to="/Event/Function">Bars</Link>
        </div>
        <div class="rent-card">
          <div class="rent-flex">
            <div class="vehical">
              <h1>Function Hall</h1>
              <img src={Function} alt="image" />
            </div>
            <div class="vehical">
              <h1>Conference Hall</h1>
              <img src={Conference} alt="image" />
            </div>
            <div class="vehical">
              <h1>Bars</h1>
              <img src={Bars} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Event;
