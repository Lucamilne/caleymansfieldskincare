import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="d-flex flex-column align-items-center text-center">

            <div className="social-media py-5">
                <a href="https://www.facebook.com/Caley-Mansfield-Skin-Revival-Specialist-108221147618411/"><i title="Facebook" className="fab fa-facebook mx-1"></i></a>
                <a href="https://www.instagram.com/skinrevivalspecialist/"><i title="Instagram" className="fab fa-instagram-square mx-1"></i></a>
                <i title="Coming Soon" className="fab fa-linkedin mx-1"></i>
            </div>
            <div className="footer-bottom pt-5">
                <Container className="d-flex flex-column align-items-center">
                    <ul>
                        <li>Start a conversation.</li>
                        <li><a href="mailto:caley@skinrevivalspecialist.co.uk">caley@skinrevivalspecialist.co.uk</a></li>
                    </ul>
                    <ul>
                        <li>©{new Date().getFullYear()} Caley Mansfield Skin Revival</li>
                        <li>All rights reserved</li>
                    </ul>
                    <img src={require("./images/icon.ico")} alt="Caley Mansfield Logo" className="favicon mt-2 mb-4" />
                </Container>
            </div>
        </footer>
    )
}

export default Footer;