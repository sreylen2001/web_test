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
  faConciergeBell,
} from "@fortawesome/free-solid-svg-icons";
import hotel_header1 from "../images/hotel_e1.png";
import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import white_1 from "../images/white_1.jpg";
import white_2 from "../images/white_2.jpeg";
import white_3 from "../images/white_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const WhiteB = () => {
  return (
    <div>
      <img src={hotel_header2} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>White Boutique Hotel and Residences</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={white_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={white_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={white_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              This property is 2 minutes walk from the beach. Set peacefully on
              Otres 2 Beach in Sihanoukville, White Boutique Hotel and
              Residences offers colonial-style accommodation with views of the
              Gulf of Siam. The hotel features an outdoor swimming pool made of
              natural quartz and andesite stones. Guests can enjoy a modern gym,
              relaxing massages and weekly activities such as live music events.
              They can also enjoy meals at the in-house restaurant or have a
              drink at the bar. From the property, it is a 15-minute tuk-tuk
              ride to the city centre of Sihanoukville. It is a 25 km drive from
              the hotel to Ream National Park and 16 km to Sihanoukville
              Airport. Phnom Penh takes a 6-hour drive. Airport transfers and
              shuttle services can be arranged upon request at an additional
              charge. All rooms are air-conditioned and feature beds with
              orthopedic mattresses, minibar and a flat-screen TV. A terrace or
              balcony are featured in certain rooms. For your comfort, you will
              find bathrobes and free toiletries. The reception operates from
              09:00 to 21:00 daily. Ticketing, excursions and transport services
              can be arranged at the property. Guests can also engage in
              activities such as snorkelling, diving and horse riding nearby.
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
                icon={faConciergeBell}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Room Service &nbsp; &nbsp; &nbsp;
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
              <FontAwesomeIcon
                icon={faSpa}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Spa and wellness centre &nbsp; &nbsp; &nbsp;
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
                <td>Standard Double Room</td>
                <td>US $130</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Residential Suite with Private Garden</td>
                <td>US $195</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Standard Twin</td>
                <td>US $130</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Honeymoon Suite Sea View</td>
                <td>US $215</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Deluxe Room with Sea View</td>
                <td>US $180</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
