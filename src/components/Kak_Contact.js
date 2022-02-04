import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  "../styles/Kak_Contact.css";
import {} from "@fortawesome/fontawesome-svg-core";
import { Form, Button } from "react-bootstrap";

export class Kak_Contact extends React.Component {
  render() {
    return (
        <div className="contact-us">
          <div className="container">
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="input-field" type="text"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="input-field" type="text"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email *</Form.Label>
                <Form.Control className="input-field" type="text"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Subject</Form.Label>
                <Form.Control className="input-field" type="text"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message *</Form.Label>
                <Form.Control className="message-field" as="textarea" rows={3}/>
              </Form.Group>
            </Form>
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </div>
    );
  }
}
