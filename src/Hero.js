import React from "react";
import ShapeFill from "./ShapeFill"

class Hero extends React.Component {
    render() {
        return (
            <section className="position-relative" id="hero">
                <img src={require("./images/mobile_hero_b.jpg")} alt="Woman undergoing skin care facial treatment" className="d-md-block d-lg-none" />
                <video autoPlay muted loop className="d-none d-lg-block">
                    <source src={require("./images/hero_crop.mp4")} type="video/mp4" />
                </video>
                <div className="gradient-filter d-flex align-items-end">
                </div>
                <ShapeFill alt="bottom" color="#eee"/>
            </section>
        )
    }
}

export default Hero;