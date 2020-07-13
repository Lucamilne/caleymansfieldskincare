import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';
import ContactForm from "./ContactForm"

function Contact() {
    return (
        <Container>
            <Row>
                <Col lg className="pl-0 pr-0">
                    <ContactForm />
                </Col>
                <Col lg className="pl-0 pr-0">
                    <Image src={require("./images/3.jpg")} style={{objectFit: "cover"}} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;