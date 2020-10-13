import React, { useState } from "react";
import { Modal, Image, Spinner } from "react-bootstrap"

const technology = {
    "Geneo": {
        class: "geneo",
        introduction: "Geneo offers effective treatments through encouraging the natural processes of skin rejuvenation. The power of natural oxygenation, complemented by the anti-aging effect of Tripollar RF, both further enhanced by Ultrasound, offer valuable advantages of immediately visible skin improvement and long-term rejuvenating effects.",
        description: "Geneo treatments can be offered to a wide variety of skin types, ages and needs, making it a perfect solution for ongoing maintenance of the skin, for targeted treatment of specific skin conditions, and for maintenance and enhancement of skin improvement following a surgical procedure.",
        summary: "",
        media: { src: "geneo.jpg", type: "img", alt: "Geneo Machine", caption: "" },
        list: { title: "Geneo delivers four essential treatments simulataneously:", content: ["Advanced exfoliation", "Oxygenation", "Infusion", "Skin tightening"] }
    },
    "A-Lift": {
        class: "alift",
        introduction: "A-Lift is a highly-effective, non-invasive facial treatment that uses the latest technology to deliver proven results. The A-Lift machine uses three phases of microcurrent and two phases of nanocurrent technology to lift, tone, and re-energise the cells in the face and neck. A-Lift increases Adenosine Triphosphate (ATP) production within the cells to accelerate their metabolism.",
        description: "A-Lift with its dual current output of microcurrent and nanocurrent boosts ATP production by up to 500% as well as automatically monitoring and adjusting itself to synchronise with the skin’s own bio-electrical frequency. The current stimulates ATP production within the cells which effectively ‘supercharges’ the rate of their metabolism back to previous levels of youth.",
        summary: "ATP levels are increased because ATP stores and transports chemical energy within the cells. It provides the cell with energy to reproduce, repair, and function. Fibroblast cells are stimulated to produce more proteins including collagen leading to better structure and improved toning and lift so the skin looks fresh. Another positive effect of this chemical reaction is more water so the cells appear more hydrated.",
        media: { src: "alift.jpg", type: "img", alt: "A-lift Machine", caption: "" },
        list: null
    },
    "Dermalux Tri-wave LED": {
        class: "dermalux",
        introduction: "Multi-Award winning Dermalux® LED Phototherapy is the leading, non-invasive treatment that harnesses the power of natural light for visibly radiant, rejuvenated and refined skin. Beautiful skin is achievable for everybody with Dermalux®. One treatment instantly energises skin cells to revitalise a dull and tired complexion. A course of treatment offers long lasting visible results, stimulating the skin’s natural rejuvenation and repair processes to speed up cell renewal, resolve problem skin conditions and promote vibrant healthy-looking skin.",
        description: "The Dermalux® treatment is a relaxing, pain free experience with proven mood enhancing effects. Enjoy some luxury me-time as your skin absorbs the energising light to kick start cell regeneration and restore radiance. Each treatment lasts for around 20 minutes and with no downtime, you can simply get up and glow! As the light triggers a whole cascade of skin enhancing processes, the visible benefits continue even after the treatment has finished.",
        summary: "We are all influenced by the Power of Light. Light has many positive effects on our bodies; it helps us to produce essential vitamin D, triggers growth, promotes wellbeing and makes our skin glow!",
        media: { src: "dermalux.jpg", type: "img", alt: "Dermalux Tri-wave LED Machine", caption: "" },
        list: null
    },
    "Coolift Gun": {
        class: "coolift",
        introduction: "The most spectacular and fast face lifting treatment to defy the passing time: 5 minutes to remove 10 years. It is a revolutionary registered system that shoots upon the facial tissues a strong CO2 flow, combining an extremely high concentration of atomized actives at a very high pressure and low temperature.",
        description: "This treatment is ideal for anti-aging and adding luminosity to the skin. It contains Hyaluronic acid and tighteners. Suitable for all skin types. It is designed to easily and quickly treat the entire face. Achieving a general lifting effect that smoothes and illuminates the skin.",
        summary: "£75 as a stand alone treatment.",
        media: { src: "coolift.jpg", type: "img", alt: "Coolift Gun", caption: "" },
        list: { title: "The benefits:", content: ["Intense hydration", "Improves skin texture and quality", "Collagen stimulation", "Dermis regeneration", "Visible plumping and brightening effects"] }
    },
    "Fusion Platinum Pen": {
        class: "fusion",
        introduction: "The Fusion Platinum pen is the ultimate device for Fractional Mesotherapy treatments. It encompasses many beneficial features, such as low noise vibration technology which provides clients with a better and more enjoyable experience. And high speed penetration, with 133 punctures per second to reduce discomfort.",
        description: "The disposable needles are 33g ultra sharp, and of the highest quality, encased in biocompatible medical plastic. The cartridges benefit from anti-back flow technology, to prevent product or bodily fluids entering the device and eliminating any chance of cross-contamination. Making the platinum pen one of the safest micro needling pens available.",
        summary: "The Fusion Mesotherapy range includes products containing the latest generation of Growth Factors and Biomimetic Peptides. Used in conjunction with the Platinum Pen, it guarantees hygiene, safety, quality treatments and results.",
        media: { src: "fusion.jpg", type: "img", alt: "Fusion Platinum Pen", caption: "" },
        list: null
    }
}

function ReadMore(props) {
    const tech = props.clicked;
    const [loaded, setLoaded] = useState(false)

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
                        {technology[tech].media.src &&
                            <>
                                {!loaded &&
                                    <Spinner className="image-wrap" animation="grow" variant="light" />
                                }
                                <Image
                                    className="image-wrap"
                                    alt={technology[tech].media.alt}
                                    src={require(`./images/technology/${technology[tech].media.src}`)}
                                    onLoad={() => {
                                        setLoaded(true)
                                    }}
                                    thumbnail
                                />
                            </>
                        }
                        <p>{technology[tech].introduction}</p>
                        <p>{technology[tech].description}</p>
                        <p>{technology[tech].summary}</p>
                        {technology[tech].list &&
                            <>
                                <p>{technology[tech].list.title}</p>
                                <ul className="pl-3">
                                    {technology[tech].list.content.map(el => (
                                        <li key={el}>{el}</li>
                                    ))}
                                </ul>
                            </>
                        }
                    </>
                }
            </Modal.Body>
        </Modal>
    );
}

export default ReadMore;