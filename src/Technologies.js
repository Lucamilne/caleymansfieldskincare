import React, { useState } from "react"
import { Container, Row, Col, Card } from 'react-bootstrap';
import ShapeFill from "./ShapeFill";


const technologies = [
  { id: 1, name: "Dermalux", media: "" },
  { id: 2, name: "Oxygeneo", media: "./images/branding/" },
  { id: 3, name: "Dermatude (Micro Needle)", media: "" },
  { id: 4, name: "Coolift Gun", media: "./images/branding/coolift-logo.svg" },
  { id: 5, name: "Chemical Peels", media: null },
  { id: 6, name: "Alift", media: null }
]

const Technologies = () => {
  return (
    <section id="technology" className="d-flex flex-column justify-content-between">
      <ShapeFill alt="shapefill-alt" />
      <Container fluid className="tile-grid">
        <Row>
          {technologies.map(technology => (
            <Col md={6} xl={4} key={technology.id} className="px-0">
              <Card className="tile">
                {technology.name}
              </Card>
            </Col>
          )) }
        </Row>
      </Container>
      <ShapeFill />
    </section>
  )
}

export default Technologies