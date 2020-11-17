import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const tech = {
    "geneo": { id: "geneo", name: "Geneo" },
    "alift": { id: "alift", name: "A-Lift" },
    "dermalux": { id: "dermalux", name: "Dermalux Tri-wave LED" },
    "coolift": { id: "coolift", name: "Coolift Gun" },
    "fusion": { id: "fusion", name: "Fusion Platinum Pen" }
}

const treatments = [
    { id: 1, header: "The Ultimate Skin Revival Treatment", description: "The luxurious relaxing signature facial delivers immediate results by:", services: [tech.geneo, tech.alift, tech.dermalux, tech.coolift], detail: "Using a selection of non-invasive technologies and advanced aesthetic products, each treatment is tailored to create efficacy for each and every client. A journey of skin improvement to feel and look years younger after just one treatment. This treatment may include the use of some or all the technologies listed below, depending on your skin type and requirements.", list: ["Stimulating collagen and elastin", "Increasing hydration levels", "Healing and enhancing skin health", "Charging up cell energy", "Oxygenating cells from within", "Lifting, shaping and firming the skin"], packages: [{ length: "70 minutes", price: "£145" }, { length: "105 minutes", price: "£205" }] },
    { id: 2, header: "The Skin Revival & Recovery Treatment", description: "Reviving the skin by using Fusion Fractional Mesotherapy - one of the most advanced microneedling systems in the UK. This unique method combines two concepts. Firstly - Advanced Collagen Stimulation Therapy (micro needling) creates thousands of tiny punctures in the skin, causing the body to create a wound healing response to renew the skin cells. As the skin repairs the production of collagen and elastin is stimulated. Secondly - Absorbtion of pharmaceuticals, vitamins, peptides, amino acids and growth factors into the skin to target specific skin conditions such as ageing, lines/wrinkles, hyperpigmentation and sun damage.", services: [tech.fusion, tech.alift, tech.dermalux], detail: "Recovery combines the use of LED phototherapy and A-lift nano current technology to increase cell energy, enhance healing capabilities and anti-ageing properties. The final ingredient is the use of adult stem cell serum which allows the recovery process to start before the treatment even ends. This treatment includes the use of the techonologies listed below.", packages: [{ length: "60 minutes", price: "£195" }] },
    { id: 3, header: "The Peel and Revive Treatment", description: "Progressive not aggressive peels are a new generation of peels using polyhydroxyacids. They are less irritating to the skin providing more comfort at application and better results. Tailored to you skin requirements, these peels can help with a multitude of skin conditions from acne, uneven skin tone, hyperpigmentation, couperosis and more.", detail: "Home are products are essential before commencing treatment for peels to fully prepare the skin", services: [tech.dermalux], packages: [{ length: "45 - 60 minutes", price: "£95" }] },
    { id: 4, header: "The Restorative Facial", description: "A beautiful hands-on facial using the highest quality and latest advanced aesthetic products with stem cell technology. A thoroughly restorative and relaxing facial including massage and gel masks to hydrate and reset the balance of skin.", packages: [{ length: "60 minutes", price: "£100" }] },
    // { id: 5, header: "Consultation", description: "For all new clients before treatments can commence, to ascertain the correct treatment plan and complete health questionnaires and a thorough skin analysis.", packages: [{ length: "30 minutes", price: "£30 (refunded back off the price of your first treatment)" }] },
];


const Products = () => {
    return (
        <Container id="treatments" className="my-5">
            <h1 className="text-center mb-4">Treatments</h1>
            <Row>
                {treatments.map(treatment => (
                    <Col lg={6} key={treatment.id}>
                        <Accordion defaultActiveKey={window.innerWidth < 576 ? null : treatment.id}>
                            <Card.Header className="d-flex justify-content-between">
                                <strong className="accordion-header">{treatment.header}</strong>
                                <Accordion.Toggle as={Button} eventKey={treatment.id} variant="outline-link" className="btn-toggle" aria-label={`Toggle information for ${treatment.header}`}>
                                    <i className="fas fa-chevron-down"></i>
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey={treatment.id}>
                                <Card.Body>
                                    <p>{treatment.description}</p>
                                    {treatment.list &&
                                        <ul className="pl-3">
                                            {treatment.list.map(el => (
                                                <li key={el}>{el}</li>
                                            ))}
                                        </ul>
                                    }
                                    {treatment.detail &&
                                        <p>{treatment.detail}</p>
                                    }
                                    <ul className="pl-3">
                                        {treatment.packages.map(el => (
                                            <li key={el.length} className="d-flex justify-content-between"><span>{el.length}</span><span>{el.price}</span></li>
                                        ))}
                                    </ul>
                                    {treatment.services &&
                                        <div className="d-flex flex-column align-items-start">
                                            <p>Click on any technology below to learn more:</p>
                                            {treatment.services.map((service, index) => (
                                                <Link
                                                    key={index}
                                                    to={{
                                                        pathname: `/technology/${service.id}`,
                                                        state: { modal: true }
                                                    }}
                                                >
                                                    <Button variant="outline-dark mb-1">{service.name}</Button>
                                                </Link>
                                            ))}
                                        </div>
                                    }
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