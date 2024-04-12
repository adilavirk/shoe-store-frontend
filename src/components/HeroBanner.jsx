"use client"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import banner1 from '../../public/slide-1.png'
import banner2 from '../../public/slide-2.png'
import banner3 from '../../public/slide-3.png'

const HeroBanner = () => {
    return (
        <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <div className="crouselArrowButton"
                        onClick={clickHandler}>
                        <BiArrowBack className="text-sm md:text-lg" />
                    </div>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <div className="crouselArrowButton right-0"
                        onClick={clickHandler}>
                        <BiArrowBack className="text-sm md:text-lg rotate-180" />
                    </div>
                )}
            >
                <div>
                    <Image src={banner1} alt="shoe image" className="aspect-[16/10] md:aspect-auto" />

                    {/* shop Now Button */}
                    <div className="shopNowButton">Shop Now</div>
                </div>
                <div>
                    <Image src={banner2} alt="shoe image" className="aspect-[16/10] md:aspect-auto" />

                    {/* shop Now Button */}
                    <div className="shopNowButton">Shop Now</div>
                </div>
                <div>
                    <Image src={banner3} alt="shoe image" className="aspect-[16/10] md:aspect-auto" />

                    {/* shop Now Button */}
                    <div className="shopNowButton">Shop Now</div>
                </div>

            </Carousel>
        </div>

    )
}

export default HeroBanner