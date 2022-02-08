import React from "react";
import { Container, Accordion, Card, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom";

const tech = {
    // "geneo": { id: "geneo", name: "Geneo" },
    "alift": { id: "alift", name: "A-Lift" },
    "dermalux": { id: "dermalux", name: "Dermalux Tri-wave LED" },
    "coolift": { id: "coolift", name: "Coolift Gun" },
    // "fusion": { id: "fusion", name: "Fusion Platinum Pen" },
    "divine": { id: "divine", name: "Pollegen Divine Pro" },
    "infinity": { id: "infinity", name: "Meso Infinity" }
}

const treatments = [
    { id: 1, header: "The Ultimate Skin Revival Treatment", description: "The ultimate skin revival treatment can deliver immediate and ongoing results by:", services: [tech.divine, tech.infinity, tech.alift, tech.dermalux, tech.coolift], detail: "This luxurious relaxing signature facial was created through the passion of wanting to achieve targeted  results for each individual. By combining selected platforms and mixing with advanced aesthetic products, enables each and every treatment to be personally tailored to create efficacy for the individual needs. A journey of skin improvement to feel and look years younger.", list: ["Stimulating collagen and elastin", "Increasing hydration levels", "Healing and enhancing skin health", "Charging up cell energy", "Oxygenating cells from within", "Lifting, shaping and firming the skin", "Nourishing cells with growth factors, vitamins, amino acids, co enzymes and minerals."], packages: [{ length: "90 minutes", price: "£185" }, { length: "120 minutes", price: "£245" }] },
    { id: 2, header: "The Skin Rejuvenation and Recovery Treatment", description: "This is a two stage treatment. Stage One: The Pyramid FaceLift . This advanced non surgical treatment is designed to lift, smooth and firm the face and neck, leaving you looking more youthful. As pyramid suggests, this advanced multi dimensional treatment incorporates using the full capabilities of the world leading Divine Pro Platform. All 4 incredible technologies: Tripollar Radio Frequency (RF), Dynamic Muscle activation, Trifractional RF and Voluderm RF micro-needling are used in one outstanding treatment. Stage Two: 48-72 hrs After treatment you are invited back to clinic to start the recovery process. With a 20 minute Dermalux LED light therapy treatment and an application of NeoGenesis Recovery.", services: [tech.divine, tech.dermalux], detail: "After stage 1 the skin can be quite warm and red this can last for 24-72 hrs. Care has to be taken with the skin during this time which is advised during a thorough consultation before treatment commences. A course of 3-6 treatments are recommended.", list: ["Dermal volumising", "Skin resurfacing", "Skin tightening", "Skin rejuvenating", "Facial contouring", "Reduces pigmentation", "Reduces scarring"], packages: [{ length: "75 minutes", price: "£350" }, { length: "Course of 3", price: "£900"}] },
    { id: 3, header: "The Peel and Revive Treatment", description: "Progressive not aggressive peels are a new generation of peels using polyhydroxyacids. They are less irritating to the skin providing more comfort at application and better results. Tailored to you skin requirements, these peels can help with a multitude of skin conditions from acne, uneven skin tone, hyperpigmentation, couperosis and more.", detail: "Home care products are essential before commencing treatment for peels to fully prepare the skin", services: [tech.dermalux], packages: [{ length: "45 - 60 minutes", price: "£95" }] },
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
                                    <i className={`fas fa-chevron-${window.innerWidth < 576 ? "down" : "up"}`}></i>
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