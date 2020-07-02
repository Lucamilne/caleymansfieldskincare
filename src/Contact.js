import React, { useState } from "react";
import { Container, Form, Col, Button } from 'react-bootstrap';

function Contact() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container fluid className="contact-us">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Col sm>
                        <Form.Group controlId="formName">
                            <Form.Label>Name <span className="required">*</span></Form.Label>
                            <Form.Control required type="name" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address <span className="required">*</span></Form.Label>
                            <Form.Control required type="email" placeholder="Enter email address" />
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group controlId="formNumber">
                            <Form.Label>Phone number <span className="required">*</span></Form.Label>
                            <Form.Control required type="tel" placeholder="Enter phone number" />
                        </Form.Group>
                    </Col>
                </Form.Row>



                <Form.Group controlId="fromMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="5" defaultValue="I'm interested in booking a free consultation." />
                </Form.Group>
                <div className="d-flex justify-content-center">
                    <Button className="btn-outline-dark hollow" type="submit">Submit form</Button>
                </div>
            </Form>
        </Container>
    )
}

export default Contact;