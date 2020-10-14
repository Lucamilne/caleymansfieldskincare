import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const options = {
    age: ["16 - 30", "31 - 45", "45 and over"],
    gender: ["Male", "Female"],
    skinColor: [
        "White - Freckles, always burns",
        "White - Usually burns, tans sometimes",
        "White/Olive - Tans easily",
        "White/Brown - Rarely burns",
        "Light/Dark Brown - Tans very easily",
        "Black - never burns, deeply pigmented"
    ],
    skinDescription: [
        "Normal",
        "Dry",
        "Oily",
        "Combination",
        "Sensitive",
        "Mature"
    ],
    skinConcern: [
        "Acne/Spots/Blackheads",
        "Redness/Rosacea",
        "Eczema/Dry & flakey",
        "Fine Lines/Wrinkles",
        "Enlarged pores",
        "Dullness/Highly reactive",
        "Sun damage/Pigmentation"
    ],
    lifestyle: [
        "I drink enough water",
        "I stay indoors most of the day",
        "I apply makeup regularly",
        "I use sun protection daily",
        "I smoke cigarettes",
        "I eat healthy including '5 a day'",
        "I get enough sleep",
        "I'm pregnant",
        "I have a regular skincare routine"
    ],
    preference: [
        "Investing in my own home routine",
        "Investing in professional treatments at a spa or salon",
        "Both",
        "Neither"
    ]
}

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
        <section id="contact-form">
            <Container>
                <h1 className="text-center mb-4">Enquiries.</h1>
                <p className="text-center mb-4">Fill out the form below to learn more.</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col lg>
                            <Form.Row>
                                <Col sm>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name<span className="required">*</span></Form.Label>
                                        <Form.Control required type="name" placeholder="Enter name" />
                                    </Form.Group>
                                </Col>
                                <Col sm>

                                    <Form.Group controlId="formAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control as="select">
                                            {options.age.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                {/* <Col sm>
                                    <Form.Group controlId="formGender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control as="select">
                                            {options.gender.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col> */}
                            </Form.Row>
                            {/* <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>How would you describe your complexion?</Form.Label>
                                        <Form.Control as="select">
                                            {options.skinColor.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row> */}
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>How would you describe your skin?</Form.Label>
                                        <Form.Control as="select">
                                            {options.skinDescription.map((option, i) => (
                                                <option key={i}>{option}</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Check the concerns that apply to you:</Form.Label>
                                        <div className="px-3 py-2">
                                            {options.skinConcern.map((option, i) => (
                                                <Form.Check type="checkbox" label={option} key={i} />
                                            ))}
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Col>
                        <Col lg>
                            {/* <Form.Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Check all that applies to your lifestyle:</Form.Label>
                                        <div className="px-3 py-2">
                                            {options.lifestyle.map((option, i) => (
                                                <Form.Check type="checkbox" label={option} key={i} />
                                            ))}
                                        </div>
                                    </Form.Group>
                                </Col>
                            </Form.Row> */}
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="fromMessage">
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control as="textarea" rows="11" defaultValue="I'm interested in booking a consultation." />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email<span className="required">*</span></Form.Label>
                                        <Form.Control required type="email" placeholder="Enter email address" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formNumber">
                                        <Form.Label>Number<span className="required">*</span></Form.Label>
                                        <Form.Control required type="tel" placeholder="Enter phone number" />
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Row>
                    <div className="pb-5 pt-4 d-flex justify-content-center">
                        <Button variant="dark" type="submit">Submit</Button>
                    </div>
                </Form>
            </Container >
        </section>
    )
}


export default ContactForm;