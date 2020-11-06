import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const options = {
    threshold: 0.5,
    rootMargin: "0px 0px -80px 0px"
}

const Sketch = () => {
    const { ref, inView } = useInView(options);

    return (
        <Image ref={ref} className={`fade-in from-right ${inView ? 'appear' : ''}`} fluid src={require("./images/sketch.png")} />
    );
};

const Paragraph = () => {
    const { ref, inView } = useInView(options);

    return (
        <div ref={ref} className={`paragraph fade-in from-left ${inView ? 'appear' : ''}`}>
            <h1 className="mb-4">Skin Revival Specialist.</h1>
            <p className="pl-3 mb-3">Based at her <strong>private Marlow clinic</strong>,{" "}
                <Link to={{
                    pathname: '/about',
                    state: { modal: true, type: "about" }
                }}>
                    <button type="button">Caley Mansfield</button>
                </Link>{" "}offers a new era of facial expertise. Providing exceptional facial treatments, combining state of the art technology with advanced aesthetic skincare to repair, revive and regenerate the skin.
                </p>
        </div>
    );
};

const Introduction = () => {
    return (
        <Container fluid id="introduction" className="d-flex justify-content-center">
            <Row>
                <Col lg className="column my-5">
                    <Sketch />
                </Col>
                <Col lg className="column mb-5">
                    <Paragraph />
                </Col>
            </Row>
        </Container >
    )
}

export default Introduction;