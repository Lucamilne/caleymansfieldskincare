import React, { useState } from "react";
import { Container, Accordion, Card, Button, Row, Col, Modal } from "react-bootstrap"

const treatments = [
    { id: 1, header: "The Ultimate Skin Revival Treatment", description: "The luxurious relaxing signature facial delivers immediate results by:", services: ["Geneo", "A-Lift", "Dermalux Tri-wave LED", "Coolift Gun"], detail: "Using a selection of non-invasive technologies and advanced aesthetic products, each treatment is tailored to create efficacy for each and every client. A journey of skin improvement to feel and look years younger after just one treatment. This treatment may include the use of some or all the technologies listed below, depending on your skin type and requirements.", list: ["Stimulating collagen and elastin", "Increasing hydration levels", "Healing and enhancing skin health", "Charging up cell energy", "Oxygenating cells from within", "Lifting, shaping and firming the skin"], packages: [{ length: "70 minutes", price: "£145" }, { length: "105 minutes", price: "£205" }] },
    { id: 2, header: "The Skin Revival and Recovery Treatment", description: "Reviving the skin by using Fusion Fractional Mesotherapy - one of the most advanced microneedling systems in the UK. This unique method combines two concepts. Firstly - Advanced Collagen Stimulation Therapy (micro needling) creates thousands of tiny punctures in the skin, causing the body to create a wound healing response to renew the skin cells. As the skin repairs the production of collagen and elastin is stimulated. Secondly - Absorbtion of pharmaceuticals, vitamins, peptides, amino acids and growth factors into the skin to target specific skin conditions such as ageing, lines/wrinkles, hyperpigmentation and sun damage.", services: ["Fusion Platinum Pen", "A-Lift", "Dermalux Tri-wave LED"], detail: "Recovery combines the use of LED phototherapy and A-lift nano current technology to increase cell energy, enhance healing capabilities and anti-ageing properties. The final ingredient is the use of adult stem cell serum which allows the recovery process to start before the treatment even ends. This treatment includes the use of the techonologies listed below.", packages: [{ length: "60 minutes", price: "£195" }] },
    { id: 3, header: "The Peel and Revive Treatment", description: "Progressive not aggressive peels are a new generation of peels using polyhydroxyacids. They are less irritating to the skin providing more comfort at application and better results. Tailored to you skin requirements, these peels can help with a multitude of skin conditions from acne, uneven skin tone, hyperpigmentation, couperosis and more.", detail: "Home are products are essential before commencing treatment for peels to fully prepare the skin", services: ["Dermalux Tri-wave LED"], packages: [{ length: "45 - 60 minutes", price: "£95" }] },
    { id: 4, header: "The Restorative Facial", description: "A beautiful hands-on facial using the highest quality and latest advanced aesthetic products with stem cell technology. A thoroughly restorative and relaxing facial including massage and gel masks to hydrate and reset the balance of skin.", packages: [{ length: "60 minutes", price: "£100" }] },
    { id: 5, header: "Consultation", description: "For all new clients before treatments can commence, to ascertain the correct treatment plan and complete health questionnaires and a thorough skin analysis.", packages: [{ length: "30 minutes", price: "£30 (refunded back off the price of your first treatment)" }] },
];

const technology = {
    "Geneo": {
        class: "geneo",
        introduction: "Geneo offers effective treatments through encouraging the natural processes of skin rejuvenation. The power of natural oxygenation, complemented by the anti-aging effect of Tripollar RF, both further enhanced by Ultrasound, offer valuable advantages of immediately visible skin improvement and long-term rejuvenating effects.",
        description: "Geneo treatments can be offered to a wide variety of skin types, ages and needs, making it a perfect solution for ongoing maintenance of the skin, for targeted treatment of specific skin conditions, and for maintenance and enhancement of skin improvement following a surgical procedure.",
        summary: "",
        media: "",
        list: ["Oxygeneo", "Tripollar", "Oxypods"]
    },
    "A-Lift": {
        class: "alift",
        introduction: "A-Lift is a highly-effective, non-invasive facial treatment that uses the latest technology to deliver proven results. The A-Lift machine uses three phases of microcurrent and two phases of nanocurrent technology to lift, tone, and re-energise the cells in the face and neck. A-Lift increases Adenosine Triphosphate (ATP) production within the cells to accelerate their metabolism.",
        description: "A-Lift with its dual current output of microcurrent and nanocurrent boosts ATP production by up to 500% as well as automatically monitoring and adjusting itself to synchronise with the skin’s own bio-electrical frequency. The current stimulates ATP production within the cells which effectively ‘supercharges’ the rate of their metabolism back to previous levels of youth.",
        summary: "ATP levels are increased because ATP stores and transports chemical energy within the cells. It provides the cell with energy to reproduce, repair, and function. Fibroblast cells are stimulated to produce more proteins including collagen leading to better structure and improved toning and lift so the skin looks fresh. Another positive effect of this chemical reaction is more water so the cells appear more hydrated.",
        media: "",
        list: null
    },
    "Dermalux Tri-wave LED": {
        class: "dermalux",
        introduction: "Multi-Award winning Dermalux® LED Phototherapy is the leading, non-invasive treatment that harnesses the power of natural light for visibly radiant, rejuvenated and refined skin. Beautiful skin is achievable for everybody with Dermalux®. One treatment instantly energises skin cells to revitalise a dull and tired complexion. A course of treatment offers long lasting visible results, stimulating the skin’s natural rejuvenation and repair processes to speed up cell renewal, resolve problem skin conditions and promote vibrant healthy-looking skin.",
        description: "The Dermalux® treatment is a relaxing, pain free experience with proven mood enhancing effects. Enjoy some luxury me-time as your skin absorbs the energising light to kick start cell regeneration and restore radiance. Each treatment lasts for around 20 minutes and with no downtime, you can simply get up and glow! As the light triggers a whole cascade of skin enhancing processes, the visible benefits continue even after the treatment has finished.",
        summary: "We are all influenced by the Power of Light. Light has many positive effects on our bodies; it helps us to produce essential vitamin D, triggers growth, promotes wellbeing and makes our skin glow!",
        media: "",
        list: ""
    },
    "Coolift Gun": {
        class: "coolift",
        introduction: "The most spectacular and fast face lifting treatment to defy the passing time: 5 minutes to remove 10 years. It is a revolutionary registered system that shoots upon the facial tissues a strong CO2 flow, combining an extremely high concentration of atomized actives at a very high pressure and low temperature.",
        description: "This treatment is ideal for anti-aging and adding luminosity to the skin. It contains Hyaluronic acid and tighteners. Suitable for all skin types. It is designed to easily and quickly treat the entire face. Achieving a general lifting effect that smoothes and illuminates the skin.",
        summary: "£75 as a stand alone treatment.",
        media: "",
        list: ["Intense hydration", "Improves skin texture and quality", "Collagen stimulation", "Dermis regeneration", "Visible plumping and brightening effects after just a single session"]
    },
    "Fusion Platinum Pen": {
        class: "fusion",
        introduction: "The Fusion Platinum pen is the ultimate device for Fractional Mesotherapy treatments. It encompasses many beneficial features, such as low noise vibration technology which provides clients with a better and more enjoyable experience. And high speed penetration, with 133 punctures per second to reduce discomfort.",
        description: "The disposable needles are 33g ultra sharp, and of the highest quality, encased in biocompatible medical plastic. The cartridges benefit from anti-back flow technology, to prevent product or bodily fluids entering the device and eliminating any chance of cross-contamination. Making the platinum pen one of the safest micro needling pens available.",
        summary: "The Fusion Mesotherapy range includes products containing the latest generation of Growth Factors and Biomimetic Peptides. Used in conjunction with the Platinum Pen, it guarantees hygiene, safety, quality treatments and results.",
        media: "",
        list: ""
    }
}

function ReadMore(props) {
    const tech = props.clicked;

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {tech}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="tech-text-content">
                    {tech &&
                        <>
                            <p>{technology[tech].introduction}</p>
                            <p>{technology[tech].description}</p>
                            <p>{technology[tech].summary}</p>
                        </>
                    }
            </Modal.Body>
        </Modal>
    );
}

const Products = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [clicked, setClicked] = useState("")

    return (
        <Container id="products" className="my-5">
            <h1 className="text-center mb-3">Treatments.</h1>
            <Row>
                {treatments.map(treatment => (
                    <Col lg={6} key={treatment.id}>
                        <Accordion defaultActiveKey={treatment.id}>
                            <Card.Header className="d-flex justify-content-between">
                                <span>{treatment.header}</span>
                                <Accordion.Toggle as={Button} eventKey={treatment.id} variant="outline-link" className="product-toggle">
                                    <i className="fas fa-chevron-up"></i>
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
                                            <p>Technologies:</p>
                                            {treatment.services.map(service => (
                                                <Button variant="outline-dark mb-1" key={service} onClick={() => {
                                                    setModalShow(true)
                                                    setClicked(service)
                                                }}>{service}</Button>
                                            ))}
                                        </div>
                                    }
                                </Card.Body>
                            </Accordion.Collapse>
                        </Accordion>
                    </Col>
                ))}
            </Row>
            <ReadMore
                show={modalShow}
                onHide={() => setModalShow(false)}
                clicked={clicked}
            />
        </Container>

    )
}

export default Products;