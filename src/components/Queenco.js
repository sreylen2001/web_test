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
  faUmbrellaBeach,
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import queenco_1 from "../images/queenco_1.jpg";
import queenco_2 from "../images/queenco_2.jpg";
import queenco_3 from "../images/queenco_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Queenco = () => {
  return (
    <div>
      <img src={hotel_header1} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Queenco Hotel and Casino</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={queenco_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={queenco_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={queenco_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Located on a private beachfront of Victory Beach, Queenco Hotel &
              Casino offers accommodation in Sihanoukville. The property boasts
              an outdoor swimming pool, spa and wellness centre and guests can
              enjoy meals at any of the 4 in-house restaurants. Free WiFi is
              available throughout the property. Complimentary parking on-site
              is offered for guests who are driving. It is 3.3 km from the city
              centre of Sihanoukville. All contemporary-styled rooms are
              air-conditioned, featuring a flat-screen Smart TV and a desk. Some
              units offer a private balcony opening up to sea views. Private
              bathrooms include a hairdryer and complimentary toiletries. All
              units have a seating area for your convenience. Guests can
              approach the 24-hour front desk for tour arrangements, ticketing
              and concierge services. A souvenir shop and a beauty salon are
              available on site.
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
                icon={faSpa}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Spa and wellness centre &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faShuttleVan}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Airport shuttle &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faUmbrellaBeach}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Beachfront &nbsp; &nbsp; &nbsp;
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
              <FontAwesomeIcon
                icon={faConciergeBell}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Room Service &nbsp; &nbsp; &nbsp; Free parking &nbsp; &nbsp;
              &nbsp;
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
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Superior</td>
                <td>US $79.27</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Superior Twin Room</td>
                <td>US $95</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Double Room</td>
                <td>US $11</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Twin Room</td>
                <td>US $122</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Royal Suite Panoramic Sea View</td>
                <td>US $937</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Premium Twin Panoramic Sea View</td>
                <td>US $152</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
