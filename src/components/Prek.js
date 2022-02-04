import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShuttleVan,
  faSmokingBan,
  faParking,
  faGlassMartiniAlt,
  faConciergeBell,
  faWifi,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
// import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
// import hotel_header3 from "../images/hotel_e3.png";
import prek_1 from "../images/prek_1.jpg";
import prek_2 from "../images/prek_2.jpg";
import prek_3 from "../images/prek_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Prek = () => {
  return (
    <div>
      <img src={hotel_header2} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Prek Kdat Eco Resort</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={prek_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={prek_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={prek_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Set in Kampot, 18 km from Kampot Pagoda, Prek Kdat Resort offers
              accommodation with a restaurant, free private parking, a bar and a
              shared lounge. Featuring a tour desk, this property also provides
              guests with a water park. The accommodation provides a 24-hour
              front desk, airport transfers, room service and free WiFi. At the
              resort all rooms are equipped with air conditioning, a desk, a
              patio with a garden view, a private bathroom, a flat-screen TV,
              bed linen and towels. Each room is equipped with a safety deposit
              box and some rooms come with lake views. The units at Prek Kdat
              Resort come with a seating area. The accommodation offers a à la
              carte or Asian breakfast. Prek Kdat Resort offers a children's
              playground. Kampot Night Market is 6 km from the resort, while
              Kampot Provincial Museum is 22 km away. The nearest airport is
              Sihanoukville International Airport, 61 km from Prek Kdat Resort.
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
                icon={faShuttleVan}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Airport shuttle &nbsp; &nbsp; &nbsp;
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
                icon={faWifi}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free Wifi &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faGlassMartiniAlt}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Bar &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faCoffee}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Tea/Coffe maker in all rooms &nbsp; &nbsp; &nbsp;
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
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>King Suite</td>
                <td>US $65</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Bungalow</td>
                <td>US $91</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe King Room</td>
                <td>US $72</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Twin</td>
                <td>US $27</td>
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
                <td>Family Bungalow</td>
                <td>US $123</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Standard Bungalow</td>
                <td>US $109</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
