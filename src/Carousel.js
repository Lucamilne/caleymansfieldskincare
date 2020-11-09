import React, { useState, useEffect } from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Container } from "react-bootstrap"
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './styles/Carousel.scss';

const products = [
    {
        brand: "Fusion Meso",
        description: " is an internationally renowned brand offering exclusive products for skin rejuvenation, skin micro-needling and transdermal skin delivery.",
        img: "Image01.jpg",
        logo: "logo_new_white.png"
    },
    {
        brand: "ekseption",
        description: "  is a professional brand of chemical peelings, resurfacing skin care, dermal fillers and mesotherapy products, each unique by its formulation.",
        img: "Image02.jpg",
        logo: "logo.png"
    },
    {
        brand: "NeoGenesis",
        description: " offers a line of non-toxic, organic, stem cell based skincare. The NeoGenesis line of products cater to all aspects of aging and other skin conditions.",
        img: "Image05.jpg",
        logo: "NeoGenesisLogoTM_white.png"
    }
]

SwiperCore.use([Navigation, Pagination]);

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

function Carousel() {
    const size = useWindowSize();

    return (
        <section id="carousel">
            <h1 className="text-center mb-4">Products.</h1>
            <Container>
                <Swiper
                    updateOnWindowResize={true}
                    slidesPerView={2}
                    spaceBetween={48}
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