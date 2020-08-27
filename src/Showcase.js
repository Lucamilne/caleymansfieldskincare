import React from "react";
import { Container, Image, Col, Row, Button } from "react-bootstrap"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Showcase = () => {
    const [ref, inView] = useInView({
        threshold: 0.4
    })

    const duration = 0.5;
    const xDist = "50px";

    return (
        <Container id="showcase">
            <motion.div ref={ref} animate={inView ? { opacity: [0, 1] } : { opacity: 0 }} transition={{ duration: duration }}>
                <motion.section ref={ref} animate={inView ? { transform: [`translateY(${xDist})`, `translateY(0px)`] } : { transform: `translateY(${xDist})` }} transition={{ duration: duration }}>
                    <Row className="d-flex justify-content-end showcase__section">
                        <Col xs lg="9" className="showcase__text">
                            <Row>
                                <Col className="d-flex flex-column align-items-center my-5">
                                    <p>Based from her private Marlow clinic, Caley Mansfield is trained and qualified to offer a range of aesthetic procedures that combine the latest medical platform technologies with advanced aesthetic skincare to cater to wide range of skin types.</p>
                                </Col>
                                <Col className="d-flex flex-column align-items-center my-5">
                                    <p>Caley guarantees the services she provides at her studio use the latest technologies and techniques in the industry.</p>
                                    <h5 className="mb-4">Call (0)7976962012</h5>
                                    <Button variant="secondary">Contact</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </motion.section>
                <motion.section ref={ref} animate={inView ? { transform: [`translateY(-${xDist})`, `translateY(0px)`] } : { transform: `translateY(-${xDist})` }} transition={{ duration: duration }}>
                    <Row className="showcase__section">
                        <Col xs lg="11" style={{ padding: "0px" }}>
                            <Image fluid src={require("./images/6.jpg")} />
                        </Col>
                    </Row>
                </motion.section>
            </motion.div>
        </Container>
    )
}

export default Showcase;