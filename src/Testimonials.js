import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Container } from "react-bootstrap"
import ShapeFill from "./ShapeFill"

const reviews = [
    { name: "V. Lewis", description: "I have been having Caley’s amazing facials for over 2 years. I started going to her when I got breast cancer and was unable to go to my usual salon. I fully expected to return to them as soon as the treatment was over. The first time she came over was a complete shock. I had never experienced such an amazing facial (I have been around a long time) she even gave my bald head a gorgeous Indian massage! Her attention to detail and protocol was very reassuring and everything she did had to have the OK with my oncologist! Of course, I am still with her now that I am better, and go to her lovely cosy treatment room with a heated and fully adjusted bed - since I have been with her I have given up my fillers and any other treatments other than hers and my face has never looked better! I can highly recommend her." },
    { name: "S. DaCosta", description: "Caley’s Ultimate Skin Revival Treatment is so much better than any other facial that I have experienced. The environment is very relaxing and just the right amount of attention to hygiene without being clinical. The facial I have is one that makes me feel calm and relaxed and I feel the benefits of the different treatments for many weeks afterwards. I like all the varied applications and look forward to each aspect of the facial and with Caley’s friendly approach it always seems to finish with me wishing I could stay for longer!" },
    { name: "G. Coster", description: "I can’t recommend Caley highly enough. I’ve had issues with my skin since my early twenties and have tried every lotion under the sun all in search of the holy grail of soft, blemish-free, hydrated skin.  Not only have I not had a blemish or skin reaction since taking her advice but Caley is always checking in on how I’m getting on and offering advice as needed. Even throughout the COVID crisis she has been in regular contact to make sure all is well. She truly cares about you as a customer and has such a warm and lovely persona that she instantly puts you at ease." },
    { name: "J. Sugg", description: "I can not recommend Caley enough.  I have always struggled with finding a skin routine which suited my skin, but since I have been going to Caley I have seen a massive transformation in my skin.  Caley is hugely knowledgeable and always offers great advice, in a friendly relaxed environment." },
    { name: "M. Dillon", description: "Caley’s attention to detail is beyond compare and her enthusiasm is a joy to behold. It is such a treat to enjoy customer care of the highest standard. She is quite simply an expert in her field." },
]

SwiperCore.use([Navigation, Pagination]);

const Testimonials = () => {
    return (
        <section id="testimonials" className="d-flex flex-column justify-content-between">
            <ShapeFill alt="shapefill-alt" />
            <h1 className="text-center mb-4">Client reviews</h1>
            <Container>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        },
                        // 992: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 32
                        // }
                    }}
                    grabCursor={true}
                    navigation
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    className="pt-3 pb-5"
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <Card className="position-relative" style={{ marginTop: "4.5rem" }}>
                                <div className="icon d-flex justify-content-center align-items-center position-absolute">
                                    <i className="fas fa-quote-left" />
                                </div>
                                <Card.Header />
                                <Card.Body>
                                    <Card.Text className="px-3 pb-3">
                                        {review.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className="text-center">
                                    <span>{review.name}</span>
                                </Card.Footer>
                            </Card>
                        </SwiperSlide>
                    ))

                    }
                </Swiper>
            </Container>
            <ShapeFill color="#ffcece" />
        </section>
    )
}

export default Testimonials;