import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from "./ContactForm"

function Contact() {
    return (
        <Container >
            <Row>
                <Col lg className="pl-0 pr-0">
                    <ContactForm />
                </Col>
                <Col lg className="pl-0 pr-0">
                    <img className="contact-image" src={require("./images/3.jpg")} />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;