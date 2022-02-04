import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSwimmer,
  faShuttleVan,
  faSmokingBan,
  faParking,
  faGlassMartiniAlt,
  faChild,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import villa_1 from "../images/villa_1.jpg";
import villa_2 from "../images/villa_2.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Villa = () => {
  return (
    <div>
      <img src={hotel_header2} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Villa Vedici</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={villa_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={villa_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={villa_1} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Based in the natural green beauty of Kampot, Villa Vedici offers
              both relaxing stay and exciting activities. This riverfront resort
              features two outdoor swimming pools and riverside terrace,
              allowing guests to enjoy breathtaking panoramic views of the Bokor
              mountains. Free WiFi is available throughout the property. Private
              rooms, suites and family rooms are available, equipped with either
              a fan or air conditioning. Bungalows include a kitchen, living
              room and a flat-screen TV. Private bathrooms come with hot shower
              facilities and free toiletries. Villa Vedici is a 5-minute drive
              from Kampot's city centre. The Old French Quarter and Kampot
              Central Market are both within a 7-minute drive away. The property
              offers motorbike rentals and Tuk Tuk services at additional
              charges. Guests can practise yoga by the river side during their
              stay at the resort. Table tennis facilities are provided and
              guests have complimentary use to bicycles to explore the
              surrounding area. Alternatively, outdoor activities such as
              kitesurfing, kayaking, mountain biking and river cruises as well
              as ticketing services and day trips can be arranged at the tour
              desk.
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
              1 swimming pool &nbsp; &nbsp; &nbsp;
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
                icon={faChild}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Family Rooms &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faGlassMartiniAlt}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Bar &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faWifi}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free Wifi &nbsp; &nbsp; &nbsp;
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
                <td>Standard double with Fan </td>
                <td>US $30</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Standard Double Room With AC</td>
                <td>US $35</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Superior Double + Single Room</td>
                <td>US $45</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Khmer House Twin/Double</td>
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
                <td>Family Suite</td>
                <td>US $125</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Apartment with Garden View</td>
                <td>US $75</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
