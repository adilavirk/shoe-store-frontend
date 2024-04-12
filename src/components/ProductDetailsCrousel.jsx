"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";


const ProductDetailsCrousel = ({ images }) => {

    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">

            <Carousel

                infiniteLoop={true}
                thumbWidth={60}
                showIndicators={false}
                showStatus={false}
                className="productCarousel"

            >
                {images?.map((img) => (
                    <img key={img?.id} src={img?.attributes?.url} alt={img?.attributes?.name} />

                ))}

            </Carousel>

        </div>
    )
}

export default ProductDetailsCrousel