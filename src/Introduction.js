import React from "react";
import { Container, Button } from "react-bootstrap"

class Introduction extends React.Component {
    render() {
        return (
            <Container className="introduction d-flex justify-content-center align-items-center">
                <div className="introduction__wrapper d-flex flex-column align-items-center">
                    <h5>Extraordinary experience in skincare</h5>
                    <h1><span>welcome!</span>This is an introductory statement</h1>
                    <Button variant="outline-primary">Read More</Button>
                </div>
            </Container>
        )
    }
}

export default Introduction;