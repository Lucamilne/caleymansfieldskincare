import React, { useState, useEffect } from "react"
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, Button } from "react-bootstrap"
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

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
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
            <Swiper
                slidesPerView={size.width < 576 ? 1 : 2}
                spaceBetween={16}
                grabCursor={true}
                navigation
                centeredSlides={true}
                pagination={{ clickable: true }}
            >
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
                                <Button variant="outline-dark">Shop</Button>
                            </Card.Body>
                        </Card>
                    </SwiperSlide>
                ))

                }
            </Swiper>
        </section>
    );
};

export default Carousel;