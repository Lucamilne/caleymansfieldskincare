import React from "react";
import { Container, Image, Col, Row, Button } from "react-bootstrap"

const Showcase = () => {
    return (
        <Container id="showcase">
            <Row className="d-flex justify-content-end showcase__section">
                <Col xs lg="8" className="showcase__text">
                        <Row>
                            <Col className="d-flex flex-column align-items-center my-5">
                                <p>This is an introductory paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </Col>
                            <Col className="d-flex flex-column align-items-center my-5">
                                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <h5 className="mb-4">Call (0)7976962012</h5>
                                <Button variant="secondary">Contact</Button>
                            </Col>
                        </Row>
                </Col>
            </Row>
            <Row className="showcase__section">
                <Col xs lg="8" style={{padding: "0px"}}>
                    <Image fluid src={require("./images/6.jpg")} />
                </Col>
            </Row>
        </Container>
    )
}

export default Showcase;