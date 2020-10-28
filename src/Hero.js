import React from "react";
import ShapeFill from "./ShapeFill"

class Hero extends React.Component {
    render() {
        return (
            <section className="position-relative" id="hero">
                <img src={require("./images/mobile-hero.jpg")} alt="Woman undergoing skin care facial treatment" className="d-md-block d-lg-none" />
                <video autoPlay muted loop className="d-none d-lg-block">
                    <source src={require("./images/routine2.mp4")} type="video/mp4" />
                </video>
                <div className="gradient-filter d-flex align-items-end">
                    {/* <div className="hero__text position-absolute">
                        
                    </div> */}
                </div>
                <ShapeFill alt="bottom" color="#eee"/>
            </section>
        )
    }
}

export default Hero;