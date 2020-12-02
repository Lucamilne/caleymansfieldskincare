import React from "react";
import { Card } from "react-bootstrap";
import { useInView } from 'react-intersection-observer';
import ShapeFill from "./ShapeFill";

const contact = [
    { value: "96 Marlow Bottom, SL7 3PH", icon: "fas fa-map-marker-alt", rel: "noopener", href: "https://www.google.com/maps/place/96+Marlow+Bottom,+Marlow+SL7+3PH/", target: "_blank"},
    { value: "caley@skinrevivalspecialist.co.uk", icon: "far fa-envelope", href: "mailto:caley@skinrevivalspecialist.co.uk"},
    { value: "07976 962012", icon: "fas fa-phone-alt", href: "tel:07976 962012" }
]

const options = {
    threshold: 0.75,
    triggerOnce: true,
}

function ContactCard() {
    const { ref, inView } = useInView(options);

    return (
        <Card ref={ref} style={{ width: '18rem' }} className={`d-lg-none m-3 shadow fade-in from-below ${inView ? 'appear' : ''}`} id="contact-card">
            <Card.Body>
                <Card.Title>Contact</Card.Title>
                <Card.Text className="contact-body d-flex flex-column mb-3">
                        {contact.map((el, i) => (
                            <span key={i}>{el.value}</span>
                        ))}
                </Card.Text>
                <div className="d-flex">
                {contact.map((el, i) => (
                    <a key={i} variant="secondary" href={el.href} rel={el.rel ? el.rel : ""} target={el.target ? el.target : ""} className="btn btn-secondary btn-circle mr-1">
                        <i className={el.icon}></i>
                    </a>
                ))}
                </div>
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