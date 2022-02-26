import React from 'react';
import { Carousel } from "react-bootstrap";
import firstslide from '../assets/imgs/firstslide.svg'
import secondslide from '../assets/imgs/secondslide.svg'
import thirdslide from '../assets/imgs/thirdslide.svg'

import '../styles/carousel.scss'

export const CarouselComponent = props => {

    return (
        <div className="container-carousel">
            <Carousel fade  >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={firstslide}
                        alt="First slide"
                    />
                    <Carousel.Caption
                        className="carousel-caption"
                    >
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={secondslide}
                        alt="Second slide"
                    />

                    <Carousel.Caption
                        className="carousel-caption"
                    >
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={thirdslide}
                        alt="Third slide"
                    />

                    <Carousel.Caption
                        className="carousel-caption"
                    >
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}