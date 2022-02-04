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
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
// import hotel_header1 from "../images/hotel_e1.png";
// import hotel_header2 from "../images/hotel_e2.png";
import hotel_header3 from "../images/hotel_e3.png";
import pri_1 from "../images/pri_1.jpg";
import pri_2 from "../images/pri_2.jpg";
import pri_3 from "../images/pri_3.jpg";
import { Carousel, Table } from "react-bootstrap";
import  "../styles/Lubd.css";

export const Privilege = () => {
  return (
    <div>
      <img src={hotel_header3} class="d-block w-100" alt="" />
      <div className="container">
        <div className="row">
          <div className="hotel-name">
            <h1>Angkor Privilege Resort and Spa</h1>
          </div>
          <div className="col">
            <div className="lubd-slider">
              <Carousel>
                <Carousel.Item>
                  <img src={pri_1} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pri_2} class="d-block w-100" alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={pri_3} class="d-block w-100" alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div className="col ">
            <p className="text">
              Angkor Privilege Resort & Spa is a newly opened, locally run
              luxury resort in the quiet, green outskirts of Siem Reap just a
              few minutes ride from the bustling city Center and the Angkor
              Archaeological Park. The largest religious monument ever built and
              the epicenter of one of the most fascinating ancient
              civilizations, Angkor Wat lies just a few kilometers north from
              our resort. Experience with us the magic and grandeur of the
              temples in any season, explore the picturesque countryside and
              Tonle Sap lake, try local delicacies and after a hard day of
              sightseeing let yourself be pampered and relax your weary limbs in
              our luxury spa.
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
              Airport shuttle (free) &nbsp; &nbsp; &nbsp;
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
                icon={faSpa}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Spa and wellness centre &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faUtensils}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Restaurant &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faCoffee}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Tea/coffee maker in all rooms &nbsp; &nbsp; &nbsp;
              <FontAwesomeIcon
                icon={faConciergeBell}
                className="icon-swimmer"
                color="#2ec6f5"
              />
              Room Service &nbsp; &nbsp; &nbsp;
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
              Superb breakfast &nbsp; &nbsp; &nbsp;
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
                <td>Suite with Pool Access - Two ways airport transfer</td>
                <td>US $106</td>
              </tr>
              <tr>
                <td>
                  <center>
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUser} />
                  </center>
                </td>
                <td>Suite with Pool Access - Two ways airport transfer</td>
                <td>US $90</td>
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
                <td>
                  Family Suite Two Bedrooms Pool Access - Two ways airport
                  transfer
                </td>
                <td>US $213</td>
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
                <td>
                  Presidential Suite Two Bedrooms - Two ways airport transfer
                </td>
                <td>US $638</td>
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
                <td>
                  Presidential Suite Two Bedrooms - Two ways airport transfer
                </td>
                <td>US $638</td>
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
                <td>
                  Presidential Suite Two Bedrooms - Two ways airport transfer
                </td>
                <td>US $542</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
