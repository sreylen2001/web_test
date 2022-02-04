import React from "react";
import { Card, Button, Row, Col, CardGroup, ListGroup } from "react-bootstrap";
import '../styles/Hotel.css';
import hotel_header from "../images/h_header.jpg";
import sr_1 from "../images/sr_1.jpg";
import sr_2 from "..//images/sr_2.jpg";
import sr_3 from "../images/sr_3.jpg";
import sr_4 from "../images/sr_4.jpg";
import kp_1 from "../images/kp_1.jpg";
import kp_2 from "../images/kp_2.jpg";
import kp_3 from "../images/kp_3.jpg";
import kp_4 from "../images/kp_4.jpg";
import kps_1 from "../images/kps_1.jpg";
import kps_2 from "../images/kps_2.jpg";
import kps_3 from "../images/kps_3.jpg";
import kps_4 from "../images/kps_4.jpg";
import {Link} from "react-router-dom";

export const Hotel = () => {
  return (
    <div>
      <h1>This is Hotel</h1>
      <img src={hotel_header} class="d-block w-100" alt="" />
      <div className="hotel-coontent">
        <div className="container">
          <h1>Hotel</h1>
          <h2>Trending Hotel in Siem Reap</h2>
          <div className="firstrow">
            <div className="wrapper">
              <Card>
                <Card.Img variant="top" src={sr_1} />
                {/* <Card.Title>Lub D Siem Reap</Card.Title> */}
                <div className="hotel-namemain">
                  <h5>Lub D</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.6</ListGroup.Item>
                  <ListGroup.Item>Price: US $11-54</ListGroup.Item>
                  <ListGroup.Item>Phone: 012 477 177</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Wat Bo Village Sangkat Sala Kamroeuk
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/lubd">See more</Link>

                </Button>
              </Card>

              <Card>
                <Card.Img variant="top" src={sr_2} />
                <div className="hotel-namemain">
                  <h5>Tanei Angkor Resort and Spa</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.8</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 089 844 589</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Phare Circus Ring Rd, Village
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/tanei">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={sr_3} />
                <div className="hotel-namemain">
                  <h5>Angkor Privilege Resort and Spa</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.7</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 099 707 107</ListGroup.Item>
                  <ListGroup.Item>
                    Address: National Road No 6 siem reap, 17251
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/privilege">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={sr_4} />
                <div className="hotel-namemain">
                  <h5>Angkor heart Bunaglow</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.5</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 012 477 177</ListGroup.Item>
                  <ListGroup.Item>
                    Address: ផ្លូវក្រវ៉ាត់ក្រុង, Krong Siem Reap
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/heart">See more</Link>
                </Button>
              </Card>
            </div>
          </div>
          <h2>Trending Hotel in Sihanoukville</h2>
          <div className="secondrow">
            <div className="wrapper">
              <Card>
                <Card.Img variant="top" src={kps_1} />
                <div className="hotel-namemain">
                  <h5>Jin Bei Palace Hotel</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 5.0</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: N/A</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Address: Preah Sihanouk
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/jinbei">See more</Link>
                </Button>
              </Card>

              <Card>
                <Card.Img variant="top" src={kps_2} />
                <div className="hotel-namemain">
                  <h5>Sandy Clay Bungalow</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.4</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 016 222 641</ListGroup.Item>
                  <ListGroup.Item>Address: Preah Sihanouk</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/sandy">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={kps_3} />
                <div className="hotel-namemain">
                  <h5>Queenco Hotel and Casino</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.6</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 034 933 733</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Victory Beach, Mohavithey Krong, District 3, Preah
                    Sihanouk 18000
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/queenco">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={kps_4} />
                <div className="hotel-namemain">
                  <h5>White Boutique Hotel and Residences</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.3</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 010 350 377</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Otres beach 2, Marina Rd, Preah Sihanouk 18000
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/whiteb">See more</Link>
                </Button>
              </Card>
            </div>
          </div>
          <h2>Trending Hotel in Kampot</h2>
          <div className="thirdrow">
            <div className="wrapper">
              <Card>
                <Card.Img variant="top" src={kp_1} />
                {/* <Card.Title>Lub D Siem Reap</Card.Title> */}
                <div className="hotel-namemain">
                  <h5>Prek Kdat</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 3.9</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 070 333 028</ListGroup.Item>
                  <ListGroup.Item>Address: Changhaon</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/prek">See more</Link>
                </Button>
              </Card>

              <Card>
                <Card.Img variant="top" src={kp_2} />
                <div className="hotel-namemain">
                  <h5>Villa Vedici</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.0</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 017 291 782</ListGroup.Item>
                  <ListGroup.Item>Address: Riverfront</ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/villa">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={kp_3} />
                <div className="hotel-namemain">
                  <h5>Mokey Republic</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.4</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 012 848 390</ListGroup.Item>
                  <ListGroup.Item>
                    Address: 730, Krong Kampot 07401
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/monkey">See more</Link>
                </Button>
              </Card>
              <Card>
                <Card.Img variant="top" src={kp_4} />
                <div className="hotel-namemain">
                  <h5>Sabay Beach</h5>
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item>Rate: 4.7</ListGroup.Item>
                  <ListGroup.Item>Price: N/A</ListGroup.Item>
                  <ListGroup.Item>Phone: 089 219 109</ListGroup.Item>
                  <ListGroup.Item>
                    Address: Village Ordnung Chimern, Commune Kampong Kreng,
                    Disctrict kampot
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="outline-info">
                  <Link to="/sabay">See more</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
