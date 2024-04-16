"use client"
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

function CarouselExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <Image
          src="/image/img2.jpg"
          width={900}
          height={900}
          alt="Description de l'image"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="/image/img2.jpg"
          width={900}
          height={900}
          alt="Description de l'image"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselExample;