import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Hero extends React.Component {
    render() {
        return (
            <div className="hero position-relative">
                <img src={require("./images/Interior.jpg")} />
                <div className="position-absolute d-flex align-items-end">
                    <div className="hero__text position-sticky">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <div className="hero__column hero__column-start">
                                        <h1>Kitchenism.</h1>
                                        <p>Design and Installation service for Italian Kitchens.</p>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className="hero__column hero__column-center d-flex">
                                        <p>Transforming imagination into reality without compromise</p>
                                    </div>
                                </Col>
                                <Col sm>
                                    <div className="hero__column hero__column-end">
                                        <p className="d-flex flex-column">
                                            <span>SL6 1NJ, Maidenhead, United Kingdom</span>
                                            <span>john@kitchenism.co.uk</span>
                                            <span>+44 (0)7974 349658</span>
                                        </p>
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