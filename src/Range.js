import kitchens from "./data/kitchens.json"
import React, { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

const Kitchens = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const kitchenSlides = kitchens.map(item => {
        return (
            <Carousel.Item key={item.name}>
                <img
                    className="slide"
                    src={item.image}
                    alt={item.name}
                />
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })


    return (
        <Container fluid className="range">
            <Row>
                <Col md>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {kitchenSlides}
                    </Carousel>
                </Col>
                <Col md className="range__text d-flex flex-column justify-content-center">
                    <Container>
                        <h1>Kitchens</h1>
                        <p>From contemporary design to retro suggestions, from minimal linearity to classic elegance, the modern and classic kitchens by Gicinque are designed to meet any need for space and style, always ensuring quality, features, attention to detail and durability.</p>
                    </Container>
                </Col>
            </Row>

        </Container>
    )
}

export default Kitchens;