import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSwimmer,
  faSmokingBan,
  faParking,
  faWheelchair,
  faUtensils,
  faGlassMartiniAlt,
  faCoffee,
  faSpa,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
// import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
// import hotel_header3 from "../images/hotel_e3.png";
import tanei_1 from "../images/tanei_1.jpg";
import tanei_2 from "../images/tanei_2.jpg";
import tanei_3 from "../images/tanei_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Tanei = () => {
  return (
    <div>
      <img src={hotel_header2} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Tanei Angkor Resort and Spa</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={tanei_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={tanei_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={tanei_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Tanei Angkor Resort and Spa into the serene world of wellness and
              be welcomed by the alluring scent of nature fused within the cozy,
              holistic, relaxing ambiance accentuated with warm friendly smiles
              in true Khmer hospitality. For a lasting sense of inner peace,
              contentment and fulfillment, Tanei Angkor Resort and Spa takes a
              holistic approach to your well-being in Mind, Body and Spirit.
              Air-conditioned rooms include a flat-screen satellite TV. Some
              units include a seating area where you can relax. All rooms open
              up to views of the garden or swimming pool. En suite bathrooms are
              equipped with a bath and bidet. For your comfort, you will find
              bath robes and slippers. Guests can approach the 24-hour front
              desk for currency exchange, tour arrangements, concierge and
              luggage storage. A selection of activities is offered in the area,
              such as golfing, horse riding and cycling through the countryside.
              Guests have use of bicycles and car rentals to explore the
              surrounding area. The property's in-house restaurant, Angkor
              Restaurant, serves up a selection of authentic Khmer dishes and
              features an international buffet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="facilities">
              <h5>Most popular facilities</h5>
            </div>
            <p className="hotel-icon">
              <FontAwesomeIcon
                icon={faSwimmer}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              2 swimming pool &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faCoffee}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Tea/coffee maker in all rooms &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faSpa}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Spa and wellness centre &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faSmokingBan}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Non-smoking &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faParking}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free parking &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faConciergeBell}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Room Service &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faWheelchair}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Facilities for disabled guests &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faUtensils}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Restaurant &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faGlassMartiniAlt}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Bar &nbsp; &nbsp; &nbsp;
            </p>
          </div>
        </div>
        <div className="room-head">
          <h1>Room Available</h1>
        </div>
        <div className="room-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sleep</th>
                <th>Accomomdation Type</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>King Cabana - Free Pick Up</td>
                <td>US $50</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Twin Executive - Free Pick Up</td>
                <td>US $41</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} /> X 8
                  </center>
                </td>
                <td>Four Bedroom FAmily Suite - Free Pick Up</td>
                <td>US $180</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>King Executive - Free Pick Up</td>
                <td>US $32</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Family Cabana - Free Pick Up</td>
                <td>US $50</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Two Bedroom Family Suite - Free Pick Up </td>
                <td>US $108</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
