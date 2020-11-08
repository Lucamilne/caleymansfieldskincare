import React from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Button } from "react-bootstrap"

//npm isntall node-sass
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles/Carousel.scss';

const products = [
    {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image01.jpg"
    },
    {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image02.jpg"
    },
    {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image03.jpg"
    }, {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image04.jpg"
    },
    {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image05.jpg"
    },
    {
        name: "Lotion",
        brand: "Meso",
        description: "Lorem ipsum",
        img: "Image06.jpg"
    }
]

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default () => {
    return (
        <section id="carousel">
            <Swiper
                slidesPerView={2}
                spaceBetween={16}
                grabCursor={true}
                navigation
                centeredSlides={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {/* <SwiperSlide><img src={require("./images/products/Image01.jpg")} alt="Skin Care Products"></img></SwiperSlide> */}
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <Card>
                            <Card.Img variant="top" src={require(`./images/products/${product.img}`)} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Shop</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))

                }
            </Swiper>
        </section>
    );
};