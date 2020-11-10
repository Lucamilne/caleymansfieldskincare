import React from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Container } from "react-bootstrap"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles/Carousel.scss';

const products = [
    {
        brand: "NeoGenesis",
        description: " advanced stem cell technology provides skincare products that help heal the skin barrier. The products work through patented S2RM® technology to nourish and regenerate skin cells. This is a unique and natural approach to skin care.",
        img: "Image05.jpg",
        logo: "NeoGenesisLogoTM_white.png"
    },
    {
        brand: "Fusion Meso",
        description: " is an internationally renowned cosmeceutical skin care range. Developed specifically to complement skin rejuvenating treatments.",
        img: "Image01.jpg",
        logo: "logo_new_white.png"
    },
    {
        brand: "ekseption",
        description: "  is a professional brand of chemical peels with home care products that prepares, rejuvenates and protects the skin.",
        img: "Image02.jpg",
        logo: "logo.png"
    }
]

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
    return (
        <section id="carousel">
            <Container className="pb-5">
                <h1 className="text-center mb-4">Products.</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        }
                    }}
                    grabCursor={true}
                    navigation
                    centeredSlides={false}
                    pagination={{ clickable: true }}
                    className="pt-3 pb-5"
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Card>
                                <img className="ml-3 mt-3 position-absolute logo" src={require(`./images/products/${product.logo}`)} alt={product.brand + " logo"} />
                                <Card.Img variant="top" src={require(`./images/products/${product.img}`)} />
                                <Card.Body>
                                    <Card.Text className={product.variant}><strong>{product.brand}</strong>{product.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    ))

                    }
                </Swiper>
            </Container>
        </section>
    );
};

export default Carousel;