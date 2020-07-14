import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ShapeFill from "./ShapeFill"

class Hero extends React.Component {
    render() {
        return (
            <div className="hero position-relative">
                <img src={require("./images/1.jpg")} />
                <div className="position-absolute d-flex align-items-end">
                    <div className="hero__text position-sticky">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <div className="hero__column hero__column-start">
                                        <h5>This text moves up and down when scrolling on desktop</h5>
                                        <p></p>
                                    </div>
                                </Col>
                                <Col sm></Col>
                                <Col sm></Col>
                            </Row>
                        </Container>
                        <ShapeFill />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;