import React, {Component} from 'react';
import { Row, Col, Form, Container, Button} from 'react-bootstrap';
import '../styles/FormLogin.css';
import free from '../images/img.png';
import './Form';

class FormLogin extends Component {

    render() {
        return (
            <div>
                <Row>

                    <Col xs={6}>
                        <Container id="main-container" className="d-grid h-100">
                            <Form id="sign-in-form" className="text-center p-3 w-100">
                                <img className="mb-4 bootstrap-logo"
                                     src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                                     alt="Bootstrap 5" />
                                <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>
                                <Form.Group controlId="sign-in-email-address">
                                    <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
                                </Form.Group>
                                <Form.Group className="mb-3 py-4" controlId="sign-in-password">
                                    <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
                                </Form.Group>
                                <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
                                    <Form.Check label="Remember me" />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" size="lg">Sign in</Button>

                                </div>
                                <p className="mt-5 text-muted">Trouvaille &copy; 2021-2022</p>
                            </Form>
                        </Container>
                    </Col>
                    <Col xs={6} >
                        <img src={free} alt={"back_ground"} className="back-image"/>
                    </Col>
                </Row>


            </div>
        );
    }
}

export default FormLogin;