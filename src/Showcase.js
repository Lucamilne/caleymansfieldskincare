import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ShapeFill from "./ShapeFill";

const Showcase = () => {
    const [ref, inView] = useInView({
        threshold: 0.4
    })

    const duration = 0.5;

    return (
        <div id="showcase" className="d-flex flex-column justify-content-between">
            <ShapeFill alt="shapefill-alt" />
            <motion.div ref={ref} animate={inView ? { opacity: [0, 1], transform: ["translateY(10px)", "translateY(0px)"]} : { opacity: 0, transform: "translateY(0px)" }} transition={{ duration: duration }}>
                <Container className="d-flex align-items-center my-5">
                    <Row className="d-flex justify-content-center">
                        <Col lg={6}>
                            <h1 className="mb-3">Skin Revival Specialist</h1>
                            <p className="pl-3">Based from her private Marlow clinic, Caley Mansfield is trained and qualified to offer a range of aesthetic procedures that combine the latest medical platform technologies with advanced aesthetic skincare to cater to wide range of skin types.</p>
                            <p className="pl-3"><a href="https://www.w3schools.com/">Contact us to book an appointment.</a></p>
                        </Col>
                    </Row>
                </Container>
            </motion.div>
            <ShapeFill />
        </div>
    )
}

export default Showcase;