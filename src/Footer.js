import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer>
            <Container fluid className="d-flex justify-content-center">
                <div className="footer__wrapper">
                    <Row>
                        <Col sm className="footer__column">
                            <div>
                                <h6>Start a conversation.</h6>
                                <ul>
                                    <li>john@kitchenism.co.uk</li>
                                    <li>+44 (0)7974 349658</li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm className="footer__column d-flex justify-content-sm-center">
                            <div>
                                <a href="https://www.facebook.com/Kitchenism-Ltd-102089151454317/"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/kitchenism_ltd/"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/john-harvey-a914771b/"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </Col>
                        <Col sm className="footer__column">
                            <div>
                                <ul>
                                    <li>© 2020 Kitchenism</li>
                                    <li>All rights reserved</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;