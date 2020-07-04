import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero position-relative">
                <img src={require("./images/Interior-2.jpg")} />
                <div className="position-absolute d-flex align-items-end">
                    <div className="hero__text position-sticky">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <div className="hero__column hero__column-start">
                                        <div>
                                            <h1>Impressionism.</h1><em>noun</em>
                                        </div>
                                        <em>im·​pres·​sion·​ism | \ im-ˈpre-shə-ˌni-zəm \</em>
                                        <p>Having your imagination turned into a reality without compromise.</p>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className="hero__column hero__column-center d-flex align-items-center">
                                        <a href="https://www.facebook.com/Kitchenism-Ltd-102089151454317/"><i className="fab fa-facebook"></i></a>
                                        <a href="https://www.instagram.com/kitchenism_ltd/"><i className="fab fa-instagram"></i></a>
                                        <a href="https://www.linkedin.com/in/john-harvey-a914771b/"><i className="fab fa-linkedin"></i></a>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className="hero__column hero__column-end">
                                        <address className="d-flex flex-column">
                                            <span>SL6 1NJ, Maidenhead, United Kingdom</span>
                                            <span>john@kitchenism.co.uk</span>
                                            <span>+44 (0)7974 349658</span>
                                        </address>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;