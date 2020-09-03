import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap"

const treatments = [
    { id: 1, header: "The Signature Skin Revival Treatment", description: "This luxurious signature and relaxing facial delivers, immediate results, hydration firming and lifting the skin whilst building up longer term health and vitality to the skin. In this treatment advanced aesthetic products are applied to deep cleanse, nourish and balance the skin whilst a selection of suitable non invasive technologies will be used to create the efficacy required for each and every client. Relaxing massage and hydrogel masks may be included depending on requirements. Feel and look 10 years younger after just one treatment.", services: ["Oxygeneo", "A-lift", "Dermalux Tri-wave LED", "Coolift Gun"], packages: [{ length: "60 mins", price: "£120" }, { length: "90 mins", price: "£175" }, { length: "120 mins", price: "£210" }] },
    { id: 2, header: "The Skin Revival and Recovery Facial", description: "Meta Therapy is a new method for skin rejuvenation- great for anti ageing, skin Hydration and restoration. Thousands of micro perforations are made to the upper layer of the skin.As a result this treatment stimulates the skin to go into repair mode, which triggers collagen and elastin production.LED and Nano current increase cell energy mixed with the use of adult stem cell products the recovery process starts before the treatment even ends. A course of 6 is recommended for ultimate results.", services: ["Dermatude Microneedling", "A-Lift Nano Current", "Dermalux Tri-wave LED"], packages: [{ length: "60mins", price: "£195" }] },
    { id: 3, header: "Peel and Revival", description: "Progressive not Aggressive peels are a new generation of peels using polyhydroxyacids. They are less irritating to the skin providing more comfort at application and better results. Tailored to you skin requirements, these peels can help with a multitude of skin conditions from acne, uneven skin tone, hyperpigmentation, couperosis and more. Home are products are essential before commencing treatment for peels to fully prepare the skin", services: ["Dermalux Tri-wave LED (if suitable)"], packages: [{ length: "One session", price: "£95" }] }
];

const Products = () => {
    return (
        <Container id="products" className="my-5">
            <h1 className="text-center mb-3">Treatments.</h1>
            <Row>
                {treatments.map(treatment => (
                    <Col lg={6} key={treatment.id}>
                        <Accordion defaultActiveKey={treatment.id}>
                            <Card.Header className="d-flex justify-content-between">
                                <span>{treatment.header}</span>
                                <Accordion.Toggle as={Button} eventKey={treatment.id} variant="outline-link">
                                    <i className="fas fa-chevron-up"></i>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={treatment.id}>
                                <Card.Body>
                                    <p>{treatment.description}</p>
                                    <ul className="pl-3">
                                        {treatment.services.map(service => (
                                            <li key={service}>{service}</li>
                                        ))}
                                    </ul>
                                    <ul className="pl-3">
                                        {treatment.packages.map(entry => (
                                            <li key={entry.length} className="d-flex justify-content-between"><span>{entry.length}</span><span>{entry.price}</span></li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}

export default Products;