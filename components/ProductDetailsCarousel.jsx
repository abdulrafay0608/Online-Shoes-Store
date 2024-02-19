import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
              infiniteLoop={true}
              showIndicators={false}
              showStatus={false}
              thumbWidth={60}
              className="productCarousel">
                {/* <div> */}
                <img src="/assets/p1.png" />
                <img src="/assets/p2.png" />
                <img src="/assets/p3.png" />
                <img src="/assets/p4.png" />
                <img src="/assets/p5.png" />
                <img src="/assets/p6.png" />
                <img src="/assets/p7.png" />
                {/* </div> */}
{/* 
                <div>
                    <img
                        src="/assets/slide-2.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div>

                <div>
                    <img
                        src="/assets/slide-3.png"
                        className="aspect-[16/10] md:aspect-auto object-cover"
                    />
                    <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                        Shop now
                    </div>
                </div> */}
            </Carousel>
            {/* <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                    />
                ))}
                <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" />
            </Carousel> */}
        </div>
    );
};

export default ProductDetailsCarousel;