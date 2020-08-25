import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import ShapeFill from "./ShapeFill"

class Hero extends React.Component {
    render() {
        return (
            <div className="position-relative" id="hero">
                <img src={require("./images/7.jpg")} className="d-sm-block d-md-none" />
                <video width="100%" autoPlay muted loop className="d-none d-md-block">
                    <source src={require("./images/routine2.mp4")} type="video/mp4" />
                </video>
                <div className="position-absolute d-flex align-items-end">
                    <div className="hero__text position-sticky">
                        <Container fluid className="d-flex justify-content-center">
                            <div className="scroll d-flex flex-column align-items-center">
                                <span>Scroll</span>
                                <i class="fas fa-caret-down"></i>
                            </div>
                        </Container>
                        <ShapeFill />
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;