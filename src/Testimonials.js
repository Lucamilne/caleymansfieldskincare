import React from "react";
import { Container, Carousel } from "react-bootstrap"
import ShapeFill from "./ShapeFill"

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials">
                <ShapeFill alt="shapefill-alt"/>
                <Container className="pl-0 pr-0">
                    <h1 className="title">Testimonials</h1>
                    <Carousel interval={null} touch="true" nextIcon={<span className='fas fa-caret-right' />} prevIcon={<span className='fas fa-caret-left' />} className="carousel-dark">
                        <Carousel.Item className="slide">
                            <Carousel.Caption>
                                <p>
                                    <i className="fas fa-quote-left mr-1"></i>
                                I’m writing this review for Caley’s Signature Skin Revival treatment - As it’s so much better than any other facial that I have experienced. First the environment is very relaxing and just the right amount of attention to hygiene without being clinical. The facial I have is one that makes me feel calm and relaxed and yet I feel the real benefits of the different treatments for many weeks afterwards. I like all the varied applications and look forward to each aspect of the facial with Caley’s friendly approach it always seems to finish with me wishing I could stay for another hour or two!
                                <i className="fas fa-quote-right ml-1"></i>
                                </p>
                                <h6 className="name">Su Da Costa</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slide">
                            <Carousel.Caption>
                                <p>
                                    <i className="fas fa-quote-left mr-1"></i>
                                I can’t recommend Caley highly enough. I’ve had issues with my skin since my early twenties and have tried every lotion under the sun all in search of the holy grail of soft, blemish-free, hydrated skin.  Not only have I not had a blemish or skin reaction since taking her advice but Caley is always checking in on how I’m getting on and offering advice as needed. even throughout the COVID crisis, despite not being able to offer appointments she has been in regular contact to make sure all is well. She truly cares about you and your skin and has such a warm and lovely persona that she instantly puts you at ease.
                                <i className="fas fa-quote-right ml-1"></i>
                                </p>
                                <h6 className="name">Gina Coster</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="slide">
                            <Carousel.Caption>
                                <p>
                                    <i className="fas fa-quote-left mr-1"></i>
                                I can not recommend Caley enough. I have always struggled with finding a skin routine which suited my skin, but since I have been going to Caley I have seen a massive transformation in my skin. Caley is hugely knowledgeable and always offers great advice, in a friendly relaxed environment. Her attention to detail is beyond compare and her enthusiasm is a joy to behold. It is such a treat to enjoy customer care of the highest standard.
                                <i className="fas fa-quote-right ml-1"></i>
                                </p>
                                <h6 className="name">Jean Sugg</h6>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
        )
    }
}

export default Testimonials;