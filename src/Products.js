import React from "react";
import { Container } from "react-bootstrap"

class Products extends React.Component {
    render() {
        return (
            <Container className="introduction d-flex justify-content-center align-items-center">
                <div className="introduction__wrapper d-flex flex-column align-items-center">
                    <h5>Our Products</h5>
                    <h1>This is a carousel of Products</h1>
                </div>
            </Container>
        )
    }
}

export default Products;