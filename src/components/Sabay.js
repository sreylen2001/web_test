import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShuttleVan,
  faSmokingBan,
  faParking,
  faGlassMartiniAlt,
  faWifi,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import sabay_1 from "../images/sabay_1.jpeg";
import sabay_2 from "../images/sabay_2.jpg";
import sabay_3 from "../images/sabay_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Sabay = () => {
  return (
    <div>
      <img src={hotel_header2} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Sabay Beach</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={sabay_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sabay_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sabay_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Situated in Kampot, 11 km from Kampot Pagoda, Sabay Beach features
              accommodation with a restaurant, free private parking, a bar and a
              shared lounge. 9 km from Kampot Night Market and 10 km from Kampot
              Provincial Museum, the property provides a garden and a private
              beach area. Some units at the property have a patio with a river
              view. Rooms come complete with a private bathroom fitted with a
              shower and free toiletries, while some rooms at the hotel also
              boast a seating area. At Sabay Beach rooms have bed linen and
              towels. The accommodation offers a terrace. Guests at Sabay Beach
              will be able to enjoy activities in and around Kampot, like
              hiking. Teuk Chhou Rapids is 18 km from the hotel, while Phnom
              Chisor is 21 km from the property. The nearest airport is
              Sihanoukville International, 91 km from Sabay Beach, and the
              property offers a paid airport shuttle service.
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
                icon={faUmbrellaBeach}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Beachfront &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faParking}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free parking &nbsp; &nbsp; &nbsp;
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
                <td>Bungalow - Beach Front</td>
                <td>US $30</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Premium Tree House</td>
                <td>US $43</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Family Room with Garden View</td>
                <td>US $45</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Riverfront Room</td>
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
                <td>Family Room with Garden View</td>
                <td>US $55</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Bungalow with Garden View</td>
                <td>US $55</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
