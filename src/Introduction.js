import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap"

class Introduction extends React.Component {
    render() {
        return (
            <Container id="introduction" className="d-flex align-items-center">
                <div className="introduction__wrapper">
                    <Row>
                        <Col>
                            <h1>Get the best</h1>
                        </Col>
                    </Row>
                    <Row className="last-row">
                        <Col>
                            <h1>out of your skin.</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Every single treatment we offer is tailored to your individual needs.</p>
                        </Col>
                    </Row>
                    <Row className="last-row">
                        <Col>
                            <p>No two skin complexions are the same.</p>
                        </Col>
                    </Row>
                    <Button variant="outline-primary">Read More</Button>
                </div>
            </Container>
        )
    }
}

export default Introduction;