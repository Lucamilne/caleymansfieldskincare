import React from "react";
import { Container } from "react-bootstrap"

class Testimonials extends React.Component {
    render() {
        return (
            <Container className="introduction d-flex justify-content-center align-items-center">
                <div className="introduction__wrapper d-flex flex-column align-items-center">
                    <h5>What our clients say</h5>
                    <h1>This is the Testimonials section</h1>
                </div>
            </Container>
        )
    }
}

export default Testimonials;