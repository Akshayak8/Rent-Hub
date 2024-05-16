import React from "react";
import Vehicals from "./images/mainpage/vehicals.png";
import music from "./images/mainpage/musicalinstruments.png";
import electronics from "./images/mainpage/electronics.png";
import furniture from "./images/mainpage/furniture.jpg";
import room from "./images/mainpage/House.png";
import event from "./images/mainpage/eventspace.png";
import party from "./images/mainpage/party.png";
import books from "./images/mainpage/books.jpg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <div className="banner">
        <Link to="Vehical">
          <a>Vehicals</a>
        </Link>
        <Link to="Music">
          <a>Musicals</a>
        </Link>
        <Link to="Electronics">
          <a>Electronics</a>
        </Link>
        <Link to="House">
          <a>Residences</a>
        </Link>
        <Link to="Event">
          <a>Events</a>
        </Link>
        <Link to="Books">
          <a>Books</a>
        </Link>
      </div>
      <div class="rent-card">
        <div class="rent-flex">
          <div class="vehical">
            <h1>Vehicals</h1>
            <Link to="Vehical">
              <img src={Vehicals} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Musical Instruments</h1>
            <Link to="Music">
              <img src={music} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Electronics</h1>
            <Link to="Electronics">
              <img src={electronics} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Residences</h1>
            <Link to="House">
              <img src={room} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Furniture</h1>
            <img src={furniture} alt="image" />
          </div>
          <div class="vehical">
            <h1>Event Spaces</h1>
            <Link to="Event">
              <img src={event} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Party Supplies</h1>
            <Link to="Event">
              <img src={party} alt="image" />
            </Link>
          </div>
          <div class="vehical">
            <h1>Books</h1>
            <Link to="Books">
              <img src={books} alt="image" />
            </Link>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>About us</h1>
      </div>
      <div className="about-inf">
        <h1>Welcome to Rent-Hub</h1>
        <div className="about-div">
          <div className="box1">
            <p>
              At Rent-Hub, we are dedicated to providing a comprehensive
              platform for all your rental needs. Whether you're looking for
              temporary accommodations, transportation options, equipment
              rentals, or services for your events, we've got you covered.
              <br></br>
              <br></br>Our mission is to make the rental process seamless and
              convenient for both renters and rental providers. With our
              user-friendly website, you can easily browse through a wide range
              of rental listings, compare options, and make bookings with just a
              few clicks.<br></br>
              <br></br>Thank you for choosing Rent-Hub. We look forward to
              serving you
            </p>
          </div>
          <div className="box1">
            <p>
              What sets us apart is our commitment to customer satisfaction and
              reliability. We strive to ensure that every rental transaction is
              smooth and hassle-free, from the moment you browse our listings to
              the completion of your rental period.<br></br>
              <br></br> Our platform is designed to connect you with trusted
              rental providers and help you find the perfect solution for your
              needs.Whether you're planning a vacation, organizing an event, or
              simply need a temporary solution, Rent-Hub is here to help.
              <br></br> <br></br>Join our community of renters and rental
              providers today and experience the convenience of renting with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
