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
                            <h1 className="mb-3">Get the best out of your skin.</h1>
                            <p className="pl-3 mb-3">Every single treatment we offer is tailored to your individual needs. No two skin complexions are the same.</p>
                        </div>
                    </Col>
                </Row>
            </motion.div>
        </Container >
    )
}

export default Introduction;