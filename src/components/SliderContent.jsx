import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import nft1 from '../assets/images/nft1.jpg'
import nft2 from '../assets/images/nft2.jpg'
import nft3 from '../assets/images/nft3.jpg'
import nft4 from '../assets/images/nft4.jpg'
import nft5 from '../assets/images/nft5.jpg'
import nft6 from '../assets/images/nft6.jpg'
import nft7 from '../assets/images/nft7.jpg'
import nft8 from '../assets/images/nft8.jpg'
import nft9 from '../assets/images/nft9.jpg'
import nft10 from '../assets/images/nft10.jpg'
import nft11 from '../assets/images/nft11.jpg'
import nft12 from '../assets/images/nft12.jpg'

export const SliderContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay:true,
        speed: 5000,
        autoPlaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 512,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            },
        ]
    };
    return (
        <>
        <section className='custom-slider'>
            <Slider {...settings}>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft1} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft2} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft3} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft4} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft5} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft6} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft7} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft8} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft9} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft10} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft11} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <div className="img">
                            <img src={nft12} alt="" />
                        </div>
                        <div className="text">
                            <h3>Nefty</h3>
                            <span>$300</span>
                        </div>
                    </div>
                </div>
            </Slider>
        </section>
        </>
    )
}
