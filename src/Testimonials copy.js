import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"
import ShapeFill from "./ShapeFill"

const reviews = [
    { id: 1, name: "S. DaCosta", description: "Caley’s Ultimate Skin Revival Treatment is so much better than any other facial that I have experienced. The environment is very relaxing and just the right amount of attention to hygiene without being clinical. The facial I have is one that makes me feel calm and relaxed and I feel the benefits of the different treatments for many weeks afterwards. I like all the varied applications and look forward to each aspect of the facial and with Caley’s friendly approach it always seems to finish with me wishing I could stay for longer!" },
    { id: 2, name: "G. Coster", description: "I can’t recommend Caley highly enough. I’ve had issues with my skin since my early twenties and have tried every lotion under the sun all in search of the holy grail of soft, blemish-free, hydrated skin.  Not only have I not had a blemish or skin reaction since taking her advice but Caley is always checking in on how I’m getting on and offering advice as needed. Even throughout the COVID crisis she has been in regular contact to make sure all is well. She truly cares about you as a customer and has such a warm and lovely persona that she instantly puts you at ease." },
    { id: 3, name: "J. Sugg", description: "I can not recommend Caley enough. I have always struggled with finding a skin routine which suited my skin, but since I have been going to Caley I have seen a massive transformation in my skin. Caley is hugely knowledgeable and always offers great advice, in a friendly relaxed environment. Her attention to detail is beyond compare and her enthusiasm is a joy to behold. It is such a treat to enjoy customer care of the highest standard." },
    { id: 4, name: "M. Dillon", description: "Caley’s attention to detail is beyond compare and her enthusiasm is a joy to behold. It is such a treat to enjoy customer care of the highest standard. She is quite simply an expert in her field." }
]

const Testimonials = () => {
    return (
        <section id="testimonials" className="d-flex flex-column justify-content-between">
            <ShapeFill alt="shapefill-alt" />
            <Container className="my-5">
                <h1 className="text-center mb-4">Client reviews</h1>
                <Row>
                    {reviews.map(review => (
                        <Col md={6} key={review.id} style={{ marginTop: "4.5rem" }}>
                            <Card className="position-relative">
                                <div className="icon d-flex justify-content-center align-items-center position-absolute">
                                    <i className="fas fa-quote-left" />
                                </div>
                                <Card.Header/>
                                <Card.Body>
                                    <Card.Text className="px-3 pb-3">
                                        {review.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <span>{review.name}</span>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <ShapeFill color="#ffcece" />
        </section>
    )
}

export default Testimonials;