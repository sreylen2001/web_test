import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from "react-bootstrap";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import img1 from "./images/4-removebg-preview.png";
import {Hotel} from "./components/Hotel";
import {Lubd} from "./components/Lubd";
import {Tanei} from "./components/Tanei";
import {Privilege} from "./components/Privilege";
import {Heart} from "./components/Heart";
import {JinBei} from "./components/JinBei";
import {Sandy} from "./components/Sandy";
import {Queenco} from "./components/Queenco";
import {WhiteB} from "./components/WhiteB";
import {Prek} from "./components/Prek";
import {Villa} from "./components/Villa";
import {Monkey} from "./components/Monkey";
import {Sabay} from "./components/Sabay";
import {Restaurant} from "./components/Restaurant";
import {Province} from "./components/Province";


function App() {
  return (
      <Router>
          <div className={"navhead"}>
              <Navbar bg="dark" variant="dark" expand="lg">
                  <Container fluid>
                      <Navbar.Brand href="#">
                          <img src={img1} alt={"logo"}/>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                          <Nav

                              className="ms-auto my-2 my-lg-0 "
                              style={{ maxHeight: '100px' }}
                              navbarScroll
                          >
                              <Nav.Link as={Link} to={"/"}>HOME</Nav.Link>
                              <Nav.Link as={Link} to={"/about"}>ABOUT</Nav.Link>
                              <Nav.Link as={Link} to={"/contact"}>CONTACT</Nav.Link>
                              <Nav.Link as={Link} to={"/login"}>LOGIN</Nav.Link>

                          </Nav>
                          <Form className="d-flex">
                              <FormControl
                                  type="search"
                                  placeholder="Search"
                                  className="me-2"
                                  aria-label="Search"
                              />

                              <Button variant="outline-success">Search</Button>
                          </Form>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
          </div>

        <div>
          <Routes>
            <Route
                path="/"
                element={<Home />}
            />
            <Route
                path="/about"
                element={<About />}
            />
            <Route
                path="/contact"
                element={<Contact />}
            />
            <Route
                path="/login"
                element={<Login />}
            />

              <Route
                  path="/hotel"
                  element={<Hotel />}
              />

              <Route
                  path="/lubd"
                  element={<Lubd />}
              />

              <Route
                  path="/tanei"
                  element={<Tanei />}
              />
              <Route
                  path="/privilege"
                  element={<Privilege />}
              />
              <Route
                  path="/heart"
                  element={<Heart />}
              />
              <Route
                  path="/jinbei"
                  element={<JinBei />}
              />
              <Route
                  path="/sandy"
                  element={<Sandy />}
              />
              <Route
                  path="/queenco"
                  element={<Queenco />}
              />
              <Route
                  path="/whiteb"
                  element={<WhiteB />}
              />
              <Route
                  path="/prek"
                  element={<Prek />}
              />
              <Route
                  path="/villa"
                  element={<Villa />}
              />
              <Route
                  path="/monkey"
                  element={<Monkey />}
              />
              <Route
                  path="/sabay"
                  element={<Sabay />}
              />
              {/*<Route*/}
              {/*    path="/resort"*/}
              {/*    element={<Resort />}*/}
              {/*/>*/}

              <Route
                  path="/restaurant"
                  element={<Restaurant />}
              />

              <Route
                  path="/province"
                  element={<Province />}
              />

          </Routes>
        </div>

      </Router>


  );
}

export default App;
