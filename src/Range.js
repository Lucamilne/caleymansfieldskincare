import kitchens from "./data/kitchens.json"
import bedrooms from "./data/bedrooms.json"
import React, { useState } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

//no props as of yet
const Range = (props) => {


    const kitchenSlides = kitchens.map(item => returnCarouselSlide(item))
    const bedroomSlides = bedrooms.map(item => returnCarouselSlide(item))

    function returnCarouselSlide(item) {
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
    }


    return (
        <Container fluid className="range">
            <Row>
                <Col lg className="range__text d-flex flex-column justify-content-center">
                    <Container>
                        <h1>Kitchens</h1>
                        <p>From contemporary design to retro suggestions, from minimal linearity to classic elegance, the modern and classic kitchens by Gicinque are designed to meet any need for space and style, always ensuring quality, features, attention to detail and durability.</p>
                    </Container>
                </Col>
                <Col lg>
                    <Carousel interval={null}>
                        {kitchenSlides}
                    </Carousel>
                </Col>
            </Row>
            <Row className="flex-lg-row-reverse">
                <Col lg className="range__text d-flex flex-column justify-content-center">
                    <Container>
                        <h1>Bedrooms</h1>
                        <p>A vast range of carefully designed solutions, a perfect match with every style of furnishing.
                        Additionally, we offer a shelving system with optional fittings to create the perfect walk-in wardrobe.
                        </p>
                    </Container>
                </Col>
                <Col lg>
                    <Carousel interval={null}>
                        {bedroomSlides}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default Range;