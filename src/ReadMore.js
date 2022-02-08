import React from "react";
import { Modal, Container, Card } from "react-bootstrap";
import aliftImage from "./images/technology/alift.jpg";
import dermaluxImage from "./images/technology/dermalux.jpg";
import cooliftImage from "./images/technology/coolift.jpg";
import divineImage from "./images/technology/divine.jpeg";
import infinityImage from "./images/technology/infinity.jpeg";
import { Link, useParams } from "react-router-dom";

const technology = {
    // "geneo": {
    //     title: "Geneo Facial Treatment Platform",
    //     introduction: "The ultimate facial treatment platform for achieving a young, fresh and natural looking skin. It is the only device on the market offering a unique combination of advanced technologies that work both on the outside and the inside of the skin.",
    //     description: "Geneo offers effective treatments through encouraging the natural processes of skin rejuvenation. The power of natural oxygenation, complemented by the anti-aging effect of Tripollar RF, both further enhanced by Ultrasound, offer valuable advantages of immediately visible skin improvement and long-term rejuvenating effects.",
    //     summary: "Geneo treatments can be offered to a wide variety of skin types, ages and needs, making it a perfect solution for ongoing maintenance of the skin and for targeted treatment of specific skin conditions.",
    //     img: { alt: "Geneo Machine", variableName: geneoImage },
    //     video: { type: "embedded", src: "https://www.youtube.com/embed/I0U5AddOYZs" },
    //     benefits: { title: "Geneo delivers four essential treatments simulataneously:", content: ["Dermis regeneration", "Increased collagen and elastin production", "Smooths and tightens skin", "Reduces fine lines and wrinkles", "Oxygenation", "Advanced exfoliation"] },
    //     faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "None", sessions: "Included in bespoke treatments devised at consultation" }
    // },
    // "fusion": {
    //     title: "Fusion Meso Pen Platinum",
    //     introduction: "The Fusion Platinum pen is the ultimate device for Fractional Mesotherapy treatments. It encompasses many beneficial features, such as low noise vibration technology which provides clients with a better and more enjoyable experience. And high speed penetration, with 133 punctures per second to reduce discomfort.",
    //     description: "The disposable needles are 33g ultra sharp, and of the highest quality, encased in biocompatible medical plastic. The cartridges benefit from anti-back flow technology, to prevent product or bodily fluids entering the device and eliminating any chance of cross-contamination. Making the platinum pen one of the safest micro needling pens available.",
    //     summary: "The Fusion Mesotherapy range includes products containing the latest generation of Growth Factors and Biomimetic Peptides. Used in conjunction with the Platinum Pen, it guarantees hygiene, safety, quality treatments and results.",
    //     img: { alt: "Fusion Platinum Pen", variableName: fusionImage },
    //     video: { type: "embedded", src: "https://www.youtube.com/embed/0qVwUrovbrQ" },
    //     benefits: { title: "What are the benefits to the Fusion Meso Platinum treatment?", content: ["Face rejuvenation", "Reduced wrinkles and expression lines", "Reverse visible aging", "Increases collagen and elastin production", "Improves skin texture and quality"] },
    //     faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "12 - 24 hours", sessions: "1 treatment recommended every 2 weeks, 3-6 treatments in total" }
    // }
    "divine": {
        title: "Pollogen Divine Pro Platform",
        introduction: "Pollogen's Divine Pro combines dermal volumisation and skin firming to provide effective, yet comfortable, facial rejuvenation in a multi-solutions platform system.",
        description: "The Divine Pro incorporates Four proven modalities, 'TriFractional Radiofrequency', 'VoluDerm needling'  'TriPollar RF and Dynamic Muscle Activation', to give a multi-dimensional benefit to the deep-dermis, mid-dermal layer and epidermis - effectively providing skin rejuvenation from the inside out.",
        summary: "With three clinically proven technologies to yield powerful treatment efficacy, the Divine™ Pro is a multi-dimensional facial rejuvenation platform developed for dynamic medi-aesthetic service environments.",
        img: { alt: "Pollogen Divine Pro", variableName: divineImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/CyvqxQqvluY" },
        benefits: { title: "The Divine Pro delivers four essential treatments simulataneously:", content: ["TriFractional Radiofrequency", "Dynamic Muscle Activation (DMA)", "TriPollar Radio Frequency", "VoluDerm needling"] },
        faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "None", sessions: "Included in bespoke treatments devised at consultation" }
    },
    "alift": {
        title: "A-lift Facial Treatment",
        introduction: "A-Lift is a highly-effective, non-invasive facial treatment that uses the latest technology to deliver proven results. The A-Lift machine uses three phases of microcurrent and two phases of nanocurrent technology to lift, tone, and re-energise the cells in the face and neck. A-Lift increases Adenosine Triphosphate (ATP) production within the cells to accelerate their metabolism.",
        description: "A-Lift with its dual current output of mic1ocurrent and nanocurrent boosts ATP production by up to 500% as well as automatically monitoring and adjusting itself to synchronise with the skin’s own bio-electrical frequency. The current stimulates ATP production within the cells which effectively ‘supercharges’ the rate of their metabolism back to previous levels of youth.",
        summary: "ATP levels are increased because ATP stores and transports chemical energy within the cells. It provides the cell with energy to reproduce, repair, and function. Fibroblast cells are stimulated to produce more proteins including collagen leading to better structure and improved toning and lift so the skin looks fresh. Another positive effect of this chemical reaction is more water so the cells appear more hydrated.",
        img: { alt: "A-lift Machine", variableName: aliftImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/3lrXsYMcafs" },
        benefits: { title: "What are the benefits of A-lift treatments?", content: ["Increases cellular energy", "Lifts and firms muscle tone", "Reduces fine lines and wrinkles", "Hydratation"] },
        faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "None", sessions: "Included in bespoke treatments devised at consultation" }
    },
    "dermalux": {
        title: "Dermalux Tri-wave LED",
        introduction: "Multi-Award winning Dermalux® LED Phototherapy is the leading, non-invasive treatment that harnesses the power of natural light for visibly radiant, rejuvenated and refined skin. Beautiful skin is achievable for everybody with Dermalux®. One treatment instantly energises skin cells to revitalise a dull and tired complexion. A course of treatment offers long lasting visible results, stimulating the skin’s natural rejuvenation and repair processes to speed up cell renewal, resolve problem skin conditions and promote vibrant healthy-looking skin.",
        description: "The Dermalux® treatment is a relaxing, pain free experience with proven mood enhancing effects. Enjoy some luxury me-time as your skin absorbs the energising light to kick start cell regeneration and restore radiance. Each treatment lasts for around 20 minutes and with no downtime. As the light triggers a whole cascade of skin enhancing processes, the visible benefits continue even after the treatment has finished.",
        summary: "We are all influenced by the Power of Light. Light has many positive effects on our bodies; it helps us to produce essential vitamin D, triggers growth, promotes wellbeing and makes our skin glow. A powerplan course of 12 is available for £500, or £45 per session as a standalone.",
        img: { alt: "Dermalux Tri-wave LED Machine", variableName: dermaluxImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/Nwz53NRp4-M" },
        benefits: { title: "What are the benefits of Dermalux LED?", content: ["Increases cellular energy", "Calms redness", "Evens skin tone", "Revitalises and restores radiance", "Helps spot prone skin", "Improves clarity", "Heals eczema", "Boosts collagen and elastin", "Reduces fine lines and wrinkles"] },
        faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "None", sessions: "Powerplan course of 12 for £500. Included in bespoke treatments devised at consultation" }
    },
    "coolift": {
        title: "Coolift Gun Cryophoresis",
        introduction: "The Coolifting gun is a needle free 4 minute treatment. It works by spraying the facial tissue or cellulite with a powerful C02 flow at a very low temperature and a high pressure. This low temperature initially causes blood vessels to constrict, then expand to increase temperature and prevent damage. This process has the secondary effect of increasing blood flow through the skin, bringing more red blood cells to the area which carry oxygen and assists in the removal of waste products.",
        description: "The body naturally absorbs C02, so by pushing this gas out at high pressure mixed with a specialised HA serum, this cocktail of molecules begins to diffuse through the epidermis uniformly. The molecules swell and replenish natural hyaluronic levels. This plumps the skin from below; softening and flattening fine lines and wrinkles.",
        summary: "This means improved skin elasticity, improved circulation, an encouragement of collagen production and repair, improved appearance of fine lines and wrinkles. £75 as a stand alone treatment.",
        img: { alt: "Coolift Gun", variableName: cooliftImage },
        video: null,
        benefits: { title: "What are the benefits of the Coolift Gun treatment?", content: ["Intense hydration", "Improves skin texture and quality", "Collagen stimulation", "Dermis regeneration", "Visible plumping and brightening effects"] },
        faq: { results: ["Immediate", "Cumulative"], downtime: "None", sessions: "A course of 3 in quick succession for £75 per session. Perfect for a special occassion. Included in bespoke treatments devised at consultation" }
    },
    "infinity": {
        title: "Meso Infinity",
        introduction: "The Meso Infinity device is a cutting edge needle-free mesotherapy delivery system.",
        description: "ETM mesotherapy technology is a combination of both Meso-chip transdermal technology & Electroporation.",
        summary: "EMT is an effective way to transport vital nutrients into the mesoderm (mesoblast layer), to achieve acceleration of cell metabolism, to promote circulation within the capillaries, and to increase collagen regeneration.",
        img: { alt: "Fusion Platinum Pen", variableName: infinityImage },
        video: { type: "embedded", src: "https://www.youtube.com/embed/GkBXC2Uczy8" },
        benefits: {
            title: "What are the benefits to the Meso Infinity treatment?", content:
                [
                    "Sensitive skin conditions",
                    "Aged skin/loss of collagen and elastin",
                    "Expanded pores/open pores",
                    "Dehydration",
                    "Pigmentation disorders",
                    "Acne/ acne rosacea",
                    "Dialated blood vessels",
                    "Scars",
                    "Hair loss/scalp conditions"
                ]
        },
        faq: { results: ["Immediate", "Cumulative", "Long Lasting"], downtime: "12 - 24 hours", sessions: "1 treatment recommended every 2 weeks, 3-6 treatments in total" }
    }
}

function ReadMore(props) {
    let { id } = useParams();

    return (
        <Modal show={true} aria-labelledby="contained-modal-title-vcenter" size="xl" id="read-more">
            <Modal.Header className="modal-close-btn">
                {id &&
                    <>
                        <img
                            className="modal-img"
                            alt={technology[id].img.alt}
                            src={technology[id].img.variableName}
                        />
                        <img src={require("./images/icon.ico")} alt="Caley Mansfield Logo" className="position-absolute cm-icon shadow" />
                        <Container className="position-relative d-flex align-items-center">
                            <div className="animate-left">
                                <h1 className="my-4">{technology[id].title}</h1>
                                <ul className="mb-4">
                                    {technology[id].benefits.content.map(el => (
                                        <li className="d-flex align-items-center" key={el}><i className="fas fa-check mr-3"></i><div>{el}</div></li>
                                    ))}
                                </ul>
                            </div>
                        </Container>
                    </>
                }
                <Link to={{
                    pathname: '/',
                    state: { modal: true, type: "about" }
                }}>
                    <button
                        className='close'
                        aria-label={props['aria-label'] || 'Close'} //eslint-disable-line react/prop-types
                        onClick={e => { e.stopPropagation() }}
                        style={{ margin: -2 }}
                    >
                        <span aria-hidden="true">
                            &times;
                        </span>
                    </button>
                </Link>
            </Modal.Header>
            <Modal.Body className="tech-text-content">
                {id &&
                    <Container className="my-5">
                        {technology[id].video &&
                            <div className="embed-responsive embed-responsive-16by9 mb-4">
                                <iframe title={technology[id].title} className="embed-responsive-item" src={technology[id].video.src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        }
                        <Card>
                            <Card.Body className="description">
                                <h2 className="mb-4">About {technology[id].title}</h2>
                                <p>{technology[id].introduction}</p>
                                <p>{technology[id].description}</p>
                                <p>{technology[id].summary}</p>
                            </Card.Body>
                        </Card>
                    </Container>
                }
            </Modal.Body>
        </Modal>
    );
}

export default ReadMore;