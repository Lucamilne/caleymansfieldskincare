import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm className="d-flex justify-content-center">
                        <div>
                            <h6>Start a conversation.</h6>
                            <ul>
                                <li>john@kitchenism.co.uk</li>
                                <li>+44 (0)7974 349658</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm className="d-flex justify-content-center">
                        <div>
                            <h6>Brands</h6>
                            <ul>
                                <a href="#"><li>Pedini</li></a>
                                <a href="#"><li>Gicinque</li></a>
                                <a href="#"><li>MD House</li></a>
                            </ul>
                        </div>
                    </Col>
                    <Col sm className="d-flex justify-content-center">
                        <div>
                            <div className="d-flex align-items-center">
                                <a href="https://www.facebook.com/Kitchenism-Ltd-102089151454317/"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/kitchenism_ltd/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/john-harvey-a914771b/"><i className="fab fa-linkedin"></i></a>
                            </div>
                            <ul>
                                <li>Copyright © 2020 Kitchenism</li>
                                <li>All rights reserved</li>
                                <li>Terms and Conditions</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;