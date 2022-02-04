import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSwimmer,
  faShuttleVan,
  faSmokingBan,
  faParking,
  faWheelchair,
  faUtensils,
  faGlassMartiniAlt,
  faSpa,
  faWifi,
  faCoffee,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import sandy_1 from "../images/sandy_1.jpg";
import sandy_2 from "../images/sandy_2.jpg";
import sandy_3 from "../images/sandy_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Sandy = () => {
  return (
    <div>
      <img src={hotel_header3} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Sandy Clay Bungalows</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={sandy_3} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sandy_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sandy_1} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              This property is 8 minutes walk from the beach. Nestled within
              private gardens, Sandy Clay Bungalows offers accommodation in
              Sihanoukville. It features a sun terrace and an indoor swimming
              pool. Free WiFi is available throughout the property. It is 500 m
              to Otres Market, while Otres Beach is 1.2 km away. Occheuteal
              Beach is 5 km from Sandy Clay Bungalows, while Serendipity Beach
              is 6 km away. The nearest airport, Sihanoukville International
              Airport is 16.6 km from the property. Airport transfers are
              available at additional charges. Every room at this resort is air
              conditioned and features a flat-screen TV. Certain units have a
              seating area where you can relax. Enjoy a cup of tea from your
              balcony or patio. For your comfort, you will find slippers and
              free toiletries.
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
                icon={faWifi}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              FreeWifi &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faParking}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free parking &nbsp; &nbsp; &nbsp;
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
                icon={faSpa}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Spa and wellness centre &nbsp; &nbsp; &nbsp;
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
              Tea/Coffee maker in all rooms &nbsp; &nbsp; &nbsp;
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
                <td>Deluxe Twin Room</td>
                <td>US $57.29</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Double Room</td>
                <td>US $61</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Standard Studio</td>
                <td>US $68</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Twin Room</td>
                <td>US $68</td>
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
                <td>Superior Apartment</td>
                <td>US $81</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Standard Triple Studio</td>
                <td>US $77</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
