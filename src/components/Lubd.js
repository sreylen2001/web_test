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
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";

import lubd_1 from "../images/sr_1.jpg";
// import lubd_2 from "../images/lubd_2.jpg";
// import lubd_3 from "../images/lubd_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Lubd = () => {
  return (
    <div>
      <img src={hotel_header1} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Lub D Siem Reap</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={lubd_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  {/*<img src={lubd_2} class="d-block w-100" alt="" />*/}
                </Carousel.Item>
                <Carousel.Item>
                  {/*<img src={lubd_3} class="d-block w-100" alt="" />*/}
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Lub d Cambodia is located in the Wat Bo neighborhood of Siem Reap
              and features Khmer-style design. It has an outdoor pool as well as
              a co-working space, and guests may dine at the on-site restaurant
              or have a drink at the poolside bar. There is free WiFi throughout
              the resort. The rooms have air conditioning. En suite baths are
              available in some units. A personal locker and a common bathroom
              are available to guests staying in the dormitory rooms. Rooms are
              air-conditioned. Some units offer en suite bathrooms. Guests
              staying in the dormitory rooms have access to a personal locker
              and a shared bathroom. Guests can approach the 24-hour front desk
              for luggage storage and tour arrangements. Alternatively, guests
              can engage in indoor activities at the games area. The property
              also offers complimentary airport pick up service. This is our
              guests' favourite part of Siem Reap, according to independent
              reviews.
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
                <td>Single Bed in 10-Bed Dormitory Room</td>
                <td>US $11</td>
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
                <td>Deluxe Double or Twin Room</td>
                <td>US $23</td>
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
                <td>Deluxe Connecting</td>
                <td>US $54</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>2 Beds in Shared 10 Bed mixed Dorm</td>
                <td>US $22</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
