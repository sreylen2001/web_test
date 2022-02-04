import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSmokingBan,
  faParking,
  faUtensils,
  faGlassMartiniAlt,
  faWifi,
  faChild,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import kp_3 from "../images/kp_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Monkey = () => {
  return (
    <div>
      <img src={hotel_header3} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Monkey Republic Kampot</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={kp_3} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={kp_3} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={kp_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Featuring a restaurant, bar, garden and free WiFi, Monkey Republic
              Kampot is set in Kampot, 4 km from Kampot Pagoda and 700 m from
              Kampot Night Market. Boasting family rooms, this property also
              provides guests with a terrace. Guests can enjoy garden views. The
              units at the guest house come with a safety deposit box and a
              private bathroom. Monkey Republic Kampot offers a continental or à
              la carte breakfast. You can play billiards at the accommodation.
              Kampot Provincial Museum is less than 1 km from Monkey Republic
              Kampot, while Teuk Chhou Rapids is 10 km away. The nearest airport
              is Sihanoukville International Airport, 84 km from the guest
              house.
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
              Free Wifi &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faParking}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Free parking &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faUtensils}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Restaurant &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faChild}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Family rooms &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faGlassMartiniAlt}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Bar &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faGlassMartiniAlt}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Very good breakfast &nbsp; &nbsp; &nbsp;
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
                <td>Standard Double Room with Fan</td>
                <td>US $14</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Single Bed in Female Dormitory Room</td>
                <td>US $11</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Superior Suite</td>
                <td>US $25</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} /> X 6
                  </center>
                </td>
                <td>Family Studio</td>
                <td>US $40</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} /> X 8
                  </center>
                </td>
                <td>Studio</td>
                <td>US $45</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
