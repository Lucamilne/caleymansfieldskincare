import React from "react";
import { Modal, Card } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

const content = [
    "Skin and it’s wellbeing is Caley’s passion. With 20 years experience, combined with continuous learning and research, Caley offers innovative personalised skin revival facials from her private clinic in Marlow, Buckinghamshire.",
    "Her methodology is based around skin rejuvenation, relaxation and most importantly skin recuperation. Treatments are tailored to each and every client’s specific needs, offering long term skin improvements. Caley regularly treats problematic skin  conditions, such as ageing, eczema, acne, sensitivity and rosacea. ",
    "Facials combine the latest medical platform technologies and use a mix of NeoGenesis and Fusion advanced aesthetic skin care to deliver unsurpassed results.  NeoGenesis specialises in stem cell technology and their unique products contain active stem cell molecules to heal the skin and repair its barrier. Caley is one of only a few NeoGenesis clinics and resellers in the UK.  Fusion is a French skincare range developed specifically for aesthetic professionals and dermatologists to complement in clinic treatments. Their formulations are based on aesthetic medicine, and have been created to meet the high demands associated to skin repair and skin regeneration in the 21st century. ",
    "Prescribing the correct products for clients to use at home is a key part in starting or continuing your skin revival journey.  Caley is always happy to consult and discuss her recommendations with you in person or online. "
]

function AboutMe(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="modal-fullscreen" id="about-me">
            <div className="modal-background">
                <div className="backgrounds"></div>
                <div className="backgrounds"></div>
                <div className="backgrounds"></div>
                <div className="gradient-filter"></div>
            </div>
            <Modal.Header>
                <Router>
                    <Link to="/">
                        <button
                            className='close'
                            aria-label={props['aria-label'] || 'Close'} //eslint-disable-line react/prop-types
                            onClick={props.onHide}
                            style={{ margin: -2 }}
                        >
                            <span aria-hidden="true">
                                &times;
                             </span>
                        </button>
                    </Link>
                    <Route path="/" />
                </Router>
            </Modal.Header>
            <Modal.Body className="d-flex justify-content-center align-items-center">
                <Card className="shadow">
                    <Card.Body>
                        <h1 className="mb-2">Caley Mansfield</h1>
                        <h3 className="mb-4">Skin Revival Specialist.</h3>
                        {content.map((el, i) => (
                            <p key={i}>{el}</p>
                        ))}
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    )
}

export default AboutMe;