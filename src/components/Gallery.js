import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../assets/section/carousel1.png';
import carousel2 from '../assets/section/carousel2.png';
import carousel from '../assets/section/carousel3.3.png';
import carousel3 from '../assets/section/carousel3.png';
import carousel4 from '../assets/section/carousel4.png';
import charecter from '../assets/section/Character1.1.png';


const Gallery = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 8
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 4
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
    return (
        <div>
             <div class="slider__section">
        <div class="slider__inner">
            <div class="owl-carousel owl-theme nft-owl-carousel">
            <Carousel
             responsive={responsive}
             autoPlay={true}
             autoPlaySpeed={3000}
             infinite={true}
             arrows={false}
             >
                <div class="item">
                    <div class="image__section">
                        <img src={carousel1} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel2} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={charecter} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel3} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel4} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel1} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel2} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={charecter} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel3} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel4} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel1} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={charecter} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel3} alt="image"/>
                    </div>
                </div>
                <div class="item">
                    <div class="image__section">
                        <img src={carousel} alt="image"/>
                    </div>
                </div>
                </Carousel>
            </div>
        </div>
   </div>
        </div>
    );
};

export default Gallery;