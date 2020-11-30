import React from "react";
import { Card, Button } from "react-bootstrap"
import ShapeFill from "./ShapeFill"

const contact = [
    { value: "96 Marlow Bottom, SL7 3PH", icon: "fas fa-map-marker-alt" },
    { value: "caley@skinrevivalspecialist.co.uk", icon: "far fa-envelope" },
    { value: "07976 962012", icon: "fas fa-phone-alt" }
]

function ContactCard() {
    return (
        <Card style={{ width: '18rem' }} className="m-3" id="contact-card">
            <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text className="contact-body">
                    <ul>
                        {contact.map(el => (
                            <li>{el.value}</li>
                        ))}
                    </ul>
                </Card.Text>
                {contact.map(el => (
                    <Button variant="secondary" className="btn-circle mr-1">
                        <i className={el.icon}></i>
                    </Button>
                ))}
            </Card.Body>
        </Card >
    )
}

function Hero() {
    return (
        <section className="position-relative" id="hero">
            <img src={require("./images/mobile_hero_b.jpg")} alt="Woman undergoing skin care facial treatment" className="d-md-block d-lg-none" />
            <video playsInline autoPlay muted loop className="d-none d-lg-block">
                <source src={require("./images/hero_crop.mp4")} type="video/mp4" />
            </video>
            <div className="gradient-filter d-flex align-items-end">
            </div>
            <ShapeFill alt="bottom" color="#eee" />
            <ContactCard />
        </section>
    )
}

export default Hero;