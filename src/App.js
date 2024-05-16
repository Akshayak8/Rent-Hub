import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import playstore from "./components/images/mainpage/google-play-badge.png";
import appstore from "./components/images/mainpage/app-store-badge.png";
import Main from "./components/Main";
import logo from "./components/images/mainpage/rentlogo.png";
import Vehical from "./components/Vehical";
import Cars from "./components/Cars";
import Bikes from "./components/Bikes";
import Goods from "./components/Goods";
import Travels from "./components/Travels";
import Music from "./components/Music";
import Instruments from "./components/Instruments";
import Electronics from "./components/Electronics";
import Device from "./components/Device";
import House from "./components/House";
import Rooms from "./components/Rooms";
import Event from "./components/Event";
import Function from "./components/Function";
import Books from "./components/Books";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img id="logoimg" src={logo} alt="logo" />
          </Link>
        </div>
        <div id="search" className="search">
          <input type="text" placeholder="Search Rents Here" />
        </div>
        <div className="login">
          <Link to="Login">
            <a>Login</a>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Vehical" element={<Vehical />}>
          <Route path="Cars" element={<Cars />} />
          <Route path="Bikes" element={<Bikes />} />
          <Route path="Goods" element={<Goods />} />
          <Route path="Travels" element={<Travels />} />
        </Route>
        <Route path="/Music" element={<Music />}>
          <Route path="Instruments" element={<Instruments />} />
        </Route>
        <Route path="/Electronics" element={<Electronics />}>
          <Route path="Device" element={<Device />} />
        </Route>
        <Route path="/House" element={<House />}>
          <Route path="Rooms" element={<Rooms />} />
        </Route>
        <Route path="/Event" element={<Event />}>
          <Route path="Function" element={<Function />} />
        </Route>
        <Route path="/Books" element={<Books />} />
      </Routes>
      <div>
        <div className="info">
          <div class="popular-locations">
            <h2>CONTACT</h2>
            <p>+91 953384236</p>
            <p>srigadaakshay@gmail.com</p>
            <p>Hyderabad,</p>
            <p>503111</p>
          </div>
          <div class="trending-locations">
            <h2>HELPFUL LINKS</h2>
            <p>FAQs (Frequently Asked Questions)</p>
            <p>Customer support or help center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div class="about-us">
            <h2>ABOUT US</h2>
            <p>Help</p>
            <p>Users</p>
            <p>Legal Information</p>
            <p>Careers</p>
          </div>
          <div class="follow-us">
            <h2>FOLLOW US</h2>
            <div class="footer-icons">
              <div class="f-badge">
                <img src={playstore} />
                <img src={appstore} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <footer>
            <p>All rights reserved &copy;2024 Rent-Hub</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
