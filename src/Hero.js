import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ShapeFill from "./ShapeFill"

class Hero extends React.Component {
    render() {
        return (
            <div className="hero position-relative">
                <img src={require("./images/1.jpg")} className="d-sm-block d-md-none"/>
                <video width="100%" autoPlay muted loop className="d-none d-md-block">
                    <source src={require("./images/routine2.mp4")} type="video/mp4" />
                </video>
                <div className="position-absolute d-flex align-items-end">
                    <div className="hero__text position-sticky">
                        <Container fluid>
                            <Row>
                                <Col sm>
                                    <div className="hero__column hero__column-start">
                                        <h5></h5>
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