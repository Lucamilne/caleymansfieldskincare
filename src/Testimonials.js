import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import ShapeFill from "./ShapeFill"

const reviews = [
    { id: 1, name: "Su Da Costa", description: "I’m writing this review for Caley’s Signature Skin Revival treatment - As it’s so much better than any other facial that I have experienced. First the environment is very relaxing and just the right amount of attention to hygiene without being clinical. The facial I have is one that makes me feel calm and relaxed and yet I feel the real benefits of the different treatments for many weeks afterwards. I like all the varied applications and look forward to each aspect of the facial with Caley’s friendly approach it always seems to finish with me wishing I could stay for another hour or two!" },
    { id: 2, name: "Gina Coster", description: "I can’t recommend Caley highly enough. I’ve had issues with my skin since my early twenties and have tried every lotion under the sun all in search of the holy grail of soft, blemish-free, hydrated skin.  Not only have I not had a blemish or skin reaction since taking her advice but Caley is always checking in on how I’m getting on and offering advice as needed. even throughout the COVID crisis, despite not being able to offer appointments she has been in regular contact to make sure all is well. She truly cares about you and your skin and has such a warm and lovely persona that she instantly puts you at ease." },
    { id: 3, name: "Jean Sugg", description: "I can not recommend Caley enough. I have always struggled with finding a skin routine which suited my skin, but since I have been going to Caley I have seen a massive transformation in my skin. Caley is hugely knowledgeable and always offers great advice, in a friendly relaxed environment. Her attention to detail is beyond compare and her enthusiasm is a joy to behold. It is such a treat to enjoy customer care of the highest standard." }
]

const Testimonials = () => {
    const [ref, inView] = useInView({
        threshold: 0.4
    })

    const duration = 0.5;

    return (
        <section id="testimonials" className="d-flex flex-column justify-content-between">
            <ShapeFill alt="shapefill-alt" />
            <Container>
                <h1 className="text-center mb-5">What our clients say.</h1>
                <Row>
                    {reviews.map(review => (
                        <Col md={6} xl={4} key={review.id}>
                            <Card className="mb-5">
                                <blockquote className="blockquote p-4 text-center card-body d-flex flex-column align-items-center">
                                    <div className="icon d-flex justify-content-center align-items-center">
                                        <i className="fas fa-quote-left" />
                                    </div>
                                    <hr className="my-4"/>
                                    <p className="mb-0">
                                        {review.description}
                                    </p>
                                </blockquote>
                                <Card.Footer className="d-flex justify-content-center">
                                    <span>{review.name}</span>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <ShapeFill />
        </section>
    )
}

export default Testimonials;