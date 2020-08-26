import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Introduction = () => {
    const [ref, inView] = useInView({
        // rootMargin: '-200px',
        threshold: 0.8
    })

    return (
        <Container id="introduction" className="d-flex align-items-center my-5">
            <motion.div ref={ref} animate={inView ? { opacity: [0, 1] } : { opacity: 0 }} transition={{ duration: 0.5 }}>
                <Col>
                    <Row>
                        <Col>
                            <h1>Get the best</h1>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <h1>out of your skin.</h1>
                        </Col>
                    </Row>
                    <div className="paragraph pl-3 mb-3">
                        <Row>
                            <Col>
                                <p>Every single treatment we offer is tailored to your individual needs.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p>No two skin complexions are the same.</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </motion.div>
        </Container >
    )
}

export default Introduction;