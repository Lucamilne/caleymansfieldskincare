import React from "react";
import { Modal, Container, Row, Col, Card } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup'
import geneoImage from "./images/technology/geneo.webp"
import aliftImage from "./images/technology/alift.webp"
import dermaluxImage from "./images/technology/dermalux.webp"
import cooliftImage from "./images/technology/coolift.webp"
import fusionImage from "./images/technology/fusion.webp"

const technology = {
    "Geneo": {
        title: "Geneo Facial Treatment Platform",
        introduction: "The ultimate facial treatment platform for achieving a young, fresh and natural looking skin. It is the only device on the markey offering a unique combination of advanced technologies that work both on the outside and the inside of the skin.",
        description: "Geneo offers effective treatments through encouraging the natural processes of skin rejuvenation. The power of natural oxygenation, complemented by the anti-aging effect of Tripollar RF, both further enhanced by Ultrasound, offer valuable advantages of immediately visible skin improvement and long-term rejuvenating effects.",
        summary: "Geneo treatments can be offered to a wide variety of skin types, ages and needs, making it a perfect solution for ongoing maintenance of the skin, for targeted treatment of specific skin conditions, and for maintenance and enhancement of skin improvement following a surgical procedure.",
        img: { alt: "Geneo Machine", variableName: geneoImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/I0U5AddOYZs" },
        benefits: { title: "Geneo delivers four essential treatments simulataneously:", content: ["Dermis regeneration", "Increased collagen and elastin production", "Smooths and tightens skin", "Reduces fine lines and wrinkles", "Oxygenation", "Advanced exfoliation"] },
        faq: { results: "Immediate / Cumulative / Long Lasting", downtime: "None", sessions: "Included in bespoke treatments devised at consultation" }
    },
    "A-Lift": {
        title: "A-lift Facial Treatment",
        introduction: "A-Lift is a highly-effective, non-invasive facial treatment that uses the latest technology to deliver proven results. The A-Lift machine uses three phases of microcurrent and two phases of nanocurrent technology to lift, tone, and re-energise the cells in the face and neck. A-Lift increases Adenosine Triphosphate (ATP) production within the cells to accelerate their metabolism.",
        description: "A-Lift with its dual current output of microcurrent and nanocurrent boosts ATP production by up to 500% as well as automatically monitoring and adjusting itself to synchronise with the skin’s own bio-electrical frequency. The current stimulates ATP production within the cells which effectively ‘supercharges’ the rate of their metabolism back to previous levels of youth.",
        summary: "ATP levels are increased because ATP stores and transports chemical energy within the cells. It provides the cell with energy to reproduce, repair, and function. Fibroblast cells are stimulated to produce more proteins including collagen leading to better structure and improved toning and lift so the skin looks fresh. Another positive effect of this chemical reaction is more water so the cells appear more hydrated.",
        img: { alt: "A-lift Machine", variableName: aliftImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/3lrXsYMcafs" },
        benefits: { title: "What are the benefits of A-lift treatments?", content: ["Increases cellular energy", "Lifts and firms muscle tone", "Reduces fine lines and wrinkles", "Hydratation"] },
        faq: { results: "Immediate / Cumulative / Long Lasting", downtime: "None", sessions: "Included in bespoke treatments devised at consultation" }
    },
    "Dermalux Tri-wave LED": {
        title: "Dermalux Tri-wave LED",
        introduction: "Multi-Award winning Dermalux® LED Phototherapy is the leading, non-invasive treatment that harnesses the power of natural light for visibly radiant, rejuvenated and refined skin. Beautiful skin is achievable for everybody with Dermalux®. One treatment instantly energises skin cells to revitalise a dull and tired complexion. A course of treatment offers long lasting visible results, stimulating the skin’s natural rejuvenation and repair processes to speed up cell renewal, resolve problem skin conditions and promote vibrant healthy-looking skin.",
        description: "The Dermalux® treatment is a relaxing, pain free experience with proven mood enhancing effects. Enjoy some luxury me-time as your skin absorbs the energising light to kick start cell regeneration and restore radiance. Each treatment lasts for around 20 minutes and with no downtime, you can simply get up and glow! As the light triggers a whole cascade of skin enhancing processes, the visible benefits continue even after the treatment has finished.",
        summary: "We are all influenced by the Power of Light. Light has many positive effects on our bodies; it helps us to produce essential vitamin D, triggers growth, promotes wellbeing and makes our skin glow!",
        img: { alt: "Dermalux Tri-wave LED Machine", variableName: dermaluxImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/Nwz53NRp4-M" },
        benefits: { title: "What are the benefits of Dermalux LED?", content: ["Increases cellular energy", "Calms redness", "Evens skin tone", "Revitalises and restores radiance", "Helps spot prone skin", "Improves clarity", "Heals eczema", "Boosts collagen and elastin", "Reduces fine lines and wrinkles"] },
        faq: { results: "Immediate / Cumulative / Long Lasting", downtime: "None", sessions: "Powerplan course of 12 for £500. Included in bespoke treatments devised at consultation" }
    },
    "Coolift Gun": {
        title: "Coolift Gun Cryophoresis",
        introduction: "The most spectacular and fast face lifting treatment to defy the passing time: 5 minutes to remove 10 years. It is a revolutionary registered system that shoots upon the facial tissues a strong CO2 flow, combining an extremely high concentration of atomized actives at a very high pressure and low temperature.",
        description: "This treatment is ideal for anti-aging and adding luminosity to the skin. It contains Hyaluronic acid and tighteners. Suitable for all skin types. It is designed to easily and quickly treat the entire face. Achieving a general lifting effect that smoothes and illuminates the skin.",
        summary: "£75 as a stand alone treatment.",
        img: { alt: "Coolift Gun", variableName: cooliftImage },
        video: null,
        benefits: { title: "What are the benefits of the Coolift Gun treatment?", content: ["Intense hydration", "Improves skin texture and quality", "Collagen stimulation", "Dermis regeneration", "Visible plumping and brightening effects"] },
        faq: { results: "Immediate / Cumulative", downtime: "None", sessions: "A course of 3 in quick succession for £75 per session. Perfect for a special occassion. Included in bespoke treatments devised at consultation" }
    },
    "Fusion Platinum Pen": {
        title: "Fusion Meso Pen Platinum",
        introduction: "The Fusion Platinum pen is the ultimate device for Fractional Mesotherapy treatments. It encompasses many beneficial features, such as low noise vibration technology which provides clients with a better and more enjoyable experience. And high speed penetration, with 133 punctures per second to reduce discomfort.",
        description: "The disposable needles are 33g ultra sharp, and of the highest quality, encased in biocompatible medical plastic. The cartridges benefit from anti-back flow technology, to prevent product or bodily fluids entering the device and eliminating any chance of cross-contamination. Making the platinum pen one of the safest micro needling pens available.",
        summary: "The Fusion Mesotherapy range includes products containing the latest generation of Growth Factors and Biomimetic Peptides. Used in conjunction with the Platinum Pen, it guarantees hygiene, safety, quality treatments and results.",
        img: { alt: "Fusion Platinum Pen", variableName: fusionImage },
        video: null,
        benefits: { title: "What are the benefits to the Fusion Meso Platinum treatment?", content: ["Face rejuvenation", "Reduced wrinkles and expression lines", "Reverse visible aging", "Whitens skin", "Reduces cellulite"] },
        faq: { results: "Immediate / Cumulative / Long Lasting", downtime: "12 - 24 hours", sessions: "1 treatment recommended every 2 weeks, 3-6 treatments in total" }
    }
}

const list = [
    { icon: "far fa-smile", title: "Visible Effects", key: "results" },
    { icon: "far fa-clock", title: "Downtime", key: "downtime" },
    { icon: "far fa-calendar", title: "Recommended Sessions", key: "sessions" }
]

function ReadMore(props) {
    const tech = props.clicked;
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="xl" id="read-more">
            <Modal.Header closeButton className="modal-close-btn">
                {tech &&
                    <>
                        <img
                            className="modal-img"
                            alt={technology[tech].img.alt}
                            src={technology[tech].img.variableName}
                        />
                        <img src={require("./images/icon.ico")} alt="Caley Mansfield Logo" className="position-absolute cm-icon" />
                        <Container className="position-relative d-flex align-items-center">
                            <div className="animate-left">
                                <h1 className="my-4">{technology[tech].title}</h1>
                                <ul className="mb-4">
                                    {technology[tech].benefits.content.map(el => (
                                        <li className="d-flex align-items-center" key={el}><i className="fas fa-check mr-3"></i><div>{el}</div></li>
                                    ))}
                                </ul>
                            </div>
                        </Container>
                    </>
                }
            </Modal.Header>
            <Modal.Body className="tech-text-content">
                {tech &&
                    <Container className="my-5">
                        <Row>
                            {technology[tech].video &&
                                <Col lg={6}>
                                    <Card className="mb-4">
                                        <Card.Header as="h5">Watch</Card.Header>
                                        <Card.Body>
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe title={technology[tech].title} className="embed-responsive-item" src={technology[tech].video.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            }
                            <Col lg={6}>
                                <Card className="faqs mb-4">
                                    <Card.Header as="h5">Frequently Asked Questions</Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            {list.map((el, index) => {
                                                return (
                                                    <ListGroup.Item className="d-flex align-items-center" key={index}>
                                                        <i className={`${el.icon} mr-4`}></i>
                                                        <div>
                                                            <Card.Title>{el.title}</Card.Title>
                                                            <Card.Text>{technology[tech].faq[el.key]}</Card.Text>
                                                        </div>
                                                    </ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <p>{technology[tech].introduction}</p>
                                <p>{technology[tech].description}</p>
                                <p>{technology[tech].summary}</p>
                            </Col>
                        </Row>
                    </Container>
                }
            </Modal.Body>
        </Modal>
    );
}

export default ReadMore;