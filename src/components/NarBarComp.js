import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button, Container} from "react-bootstrap";
import img1 from "../images/4-removebg-preview.png";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Contact from "./Contact";
import Login from "./Login";
import About from "./About";
import Home from "./Home";


export default class NarBarComp extends Component{
render() {
        return (
            <Router>
                <div>
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">
                                <img src={img1} alt={"logo"}/>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>
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
                            path="/home"
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
                    </Routes>
                </div>

            </Router>
        );
    }

}