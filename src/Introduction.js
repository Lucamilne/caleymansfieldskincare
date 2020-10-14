import React, { useState } from "react";
import AboutMe from "./AboutMe";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useInView } from 'react-intersection-observer';

const options = {
    threshold: 0.5,
    rootMargin: "0px 0px -80px 0px"
}

const Sketch = () => {
    const { ref, inView } = useInView(options);

    return (
        <Image ref={ref} className={`fade-in from-right ${inView ? 'appear' : ''}`} fluid src={require("./images/10.png")} />
    );
};

const Paragraph = () => {
    const { ref, inView } = useInView(options);
    const [modalShow, setModalShow] = useState(false);

    return (
        <div ref={ref} className={`paragraph fade-in from-left ${inView ? 'appear' : ''}`}>
            <h1 className="mb-4">Skin Revival Specialist.</h1>
            <p className="pl-3 mb-3">Based at her private Marlow clinic, <button type="button" onClick={() => setModalShow(true)}>Caley Mansfield</button> is trained and qualified to offer a range of aesthetic procedures that combine the latest medical platform technologies with advanced aesthetic skincare to cater to wide range of skin types.</p>
            <AboutMe
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
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