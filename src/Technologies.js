import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel';
import ShapeFill from "./ShapeFill";


const tech = [
  { id: 1, name: "Dermalux", media: "" },
  { id: 2, name: "Oxygeneo", media: "./images/branding/" },
  { id: 3, name: "Dermatude (Micro Needle)", media: "" },
  { id: 4, name: "Coolift Gun", media: "./images/branding/coolift-logo.svg" },
  { id: 5, name: "Chemical Peels", media: null },
  { id: 6, name: "Alift", media: null }
]

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          className="d-block w-100 custom-slide"
          alt="First slide"
        ></div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 custom-slide"
          alt="Second slide"
        ></div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 custom-slide"
          alt="Third slide"
        ></div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const Technologies = () => {
  return (
    <div id="technology" className="d-flex flex-column justify-content-between">
      <ShapeFill alt="shapefill-alt" />
      <h1 className="text-center">Technologies prototype</h1>
      <ShapeFill />
    </div>
  )
}

export default Technologies