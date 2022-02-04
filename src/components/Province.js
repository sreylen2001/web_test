import React from "react";
import { Carousel } from "react-bootstrap";
import "../styles/Province.css";
import { Card, CardGroup } from "react-bootstrap";
import pr_header1 from "../images/pr_songsa.png";
import pr_header2 from "../images/pr_bokor.png";
import pr_header3 from "../images/pr_sr.png";
import pr_pepper from "../images/pr_pepper.jpg";
import pr_sunset from "../images/pr_sunset.jpg";
import pr_mountain from "../images/pr_mountain.jpg";
import pr_waterfal from "../images/pr_waterfal.jpg";
import pr_kayak from "../images/pr_kayak.jpg";
import pr_daungte from "../images/pr_daungte.jpg";

export const Province = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img src={pr_header1} class="d-block w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pr_header2} class="d-block w-100" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pr_header3} class="d-block w-100" alt="" />
        </Carousel.Item>
      </Carousel>
      <div className="kampot-content">
        <div className="container">
          <h1>Kampot Province</h1>
        </div>
      </div>
      <div className="kampot-special">
        <div className="container">
          <h3>Kampot Top Tourist Attraction</h3>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={pr_sunset} />
              <Card.Body>
                <Card.Title>Kep Sailing Club</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={pr_daungte} />
              <Card.Body>
                <Card.Title>Daung Te</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={pr_kayak} />
              <Card.Body>
                <Card.Title>Kayaking</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={pr_mountain} />
              <Card.Body>
                <Card.Title>Bokor National Park</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={pr_waterfal} />
              <Card.Body>
                <Card.Title>Popokvil Waterfall</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={pr_pepper} />
              <Card.Body>
                <Card.Title> La Plantation Pepper Farm</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
      </div>
    </div>
  );
};
