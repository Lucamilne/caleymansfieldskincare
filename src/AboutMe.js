import React from "react";
import { Modal } from "react-bootstrap"

const content = [
    "Skin and it’s wellbeing is Caley’s passion. With 20 years experience, combined with continuous learning and research, Caley offers innovative personalised skin revival facials from her private clinic in Marlow, Buckinghamshire.",
    "Her methodology is based around skin rejuvenation, relaxation and most importantly skin recuperation. Treatments are tailored to each and every client’s specific needs, offering long term skin improvements. Caley regularly treats problematic skin  conditions, such as ageing, eczema, acne, sensitivity and rosacea. ",
    "Facials combine the latest medical platform technologies and use a mix of NeoGenesis and Fusion advanced aesthetic skin care to deliver unsurpassed results.  NeoGenesis specialises in stem cell technology and their unique products contain active stem cell molecules to heal the skin and repair its barrier. Caley is one of only a few NeoGenesis clinics and resellers in the UK.  Fusion is a French skincare range developed specifically for aesthetic professionals and dermatologists to complement in clinic treatments. Their formulations are based on aesthetic medicine, and have been created to meet the high demands associated to skin repair and skin regeneration in the 21st century. ",
    "Prescribing the correct products for clients to use at home is a key part in starting or continuing your skin revival journey.  Caley is always happy to consult and discuss her recommendations with you in person or online. "
]

function AboutMe(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="modal-fullscreen">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    About Caley Mansfield
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content.map((el, i) => (
                    <p key={i}>{el}</p>
                ))}
            </Modal.Body>
        </Modal>
    )
}

export default AboutMe;