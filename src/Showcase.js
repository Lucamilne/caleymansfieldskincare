import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import ShapeFill from "./ShapeFill";

const Showcase = () => {
    return (
        <div id="showcase" className="d-flex flex-column justify-content-between">
            <ShapeFill alt="shapefill-alt" color="#eee"/>
                <Container className="d-flex align-items-center my-5">
                    <Row className="d-flex justify-content-center">
                        <Col lg={6}>
                            <h1 className="mb-4">Allow your skin to flourish.</h1>
                            <p className="pl-3">We are all unique therefore each and every treatment is tailored to your specific requirements.</p>
                        </Col>
                    </Row>
                </Container>
            <ShapeFill/>
        </div>
    )
}

export default Showcase;