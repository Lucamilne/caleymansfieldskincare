import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Introduction = () => {
    const [ref, inView] = useInView({
        threshold: 0.4
    })

    return (
        <Container fluid id="introduction" className="d-flex align-items-center">
            <motion.div ref={ref} animate={inView ? { opacity: [0, 1] } : { opacity: 0}} transition={{ duration: 0.5 }}>
                <Row>
                    <Col lg className="column my-5">
                        <Image fluid src={require("./images/10.png")} />
                    </Col>
                    <Col lg className="column mb-5">
                        <div className="paragraph">
                            <h1 className="mb-3">Skin Revival Specialist.</h1>
                            <p className="pl-3 mb-3">Based from her private Marlow clinic, Caley Mansfield is trained and qualified to offer a range of aesthetic procedures that combine the latest medical platform technologies with advanced aesthetic skincare to cater to wide range of skin types.</p>
                            <p className="pl-3"><a href="https://www.w3schools.com/">Contact us to book an appointment.</a></p>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </Container >
    )
}

export default Introduction;