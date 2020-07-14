import React, { useState } from "react";
import { Form, Col, Button } from 'react-bootstrap';

function ContactForm() {
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
        <Form noValidate validated={validated} onSubmit={handleSubmit} id="contact-us" className="h-100">
            <h1>Contact</h1>
            <p>Questions? Get in touch</p>
            <Form.Row>
                <Col md>
                    <Form.Group controlId="formName">
                        <Form.Label>Name<span className="required">*</span></Form.Label>
                        <Form.Control required type="name" placeholder="Enter name" />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email<span className="required">*</span></Form.Label>
                        <Form.Control required type="email" placeholder="Enter email address" />
                    </Form.Group>
                </Col>
                <Col md>
                    <Form.Group controlId="formNumber">
                        <Form.Label>Number<span className="required">*</span></Form.Label>
                        <Form.Control required type="tel" placeholder="Enter phone number" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Group controlId="fromMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="15" defaultValue="I'm interested in booking a free consultation." />
            </Form.Group>
            <div className="form-btn d-flex justify-content-center">
                <Button variant="light" type="submit">Submit</Button>
            </div>
        </Form>
    )
}

export default ContactForm;