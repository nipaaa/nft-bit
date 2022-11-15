import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import title from "../assets/logo/title_shapes.svg";

const RoadMap = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <div class="road__map__section" id="Roadmap">
        <div class="container">
          <div class="road__map__inner">
            <div class="about__title">
              <h4>
                OUR GOALS <img src={title} alt="image" />
              </h4>
              <h2>ROADMAP</h2>
            </div>
            <div class="road__slide">
              <div class="owl-carousel owl-theme road__map__slide">
                <Carousel
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={3000}
                  infinite={true}
                  arrows={false}
                >
                      <div class="item p-2">
                  <div class="slide__title">
                    <h4>
                      PHASE 01 <i class="fa-solid fa-check"></i>
                    </h4>
                    <h2>20% SOLDOUT</h2>
                  </div>
                  <div class="slide__para">
                    <p>
                      Lorem lorem lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Eum sapiente dignissimos voluptas rerum
                      delectus. Sed, fuga inventore? Modi culpa recusandae
                      quisquam porro!
                    </p>
                  </div>
                </div>
                  <div class="item p-2">
                    <div class="slide__title">
                      <h4>
                        PHASE 02 <i class="fa-solid fa-check"></i>
                      </h4>
                      <h2>50% SOLDOUT</h2>
                    </div>
                    <div class="slide__para">
                      <p>
                        Lorem lorem lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum sapiente dignissimos voluptas
                        rerum delectus. Sed, fuga inventore? Modi culpa
                        recusandae quisquam porro!
                      </p>
                    </div>
                  </div>
                  <div class="item p-2">
                    <div class="slide__title">
                      <h4>
                        PHASE 03 <i class="fa-solid fa-check"></i>
                      </h4>
                      <h2>80% SOLDOU</h2>
                    </div>
                    <div class="slide__para">
                      <p>
                        Lorem lorem lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum sapiente dignissimos voluptas
                        rerum delectus. Sed, fuga inventore? Modi culpa
                        recusandae quisquam porro!
                      </p>
                    </div>
                  </div>
                  <div class="item p-2">
                    <div class="slide__title">
                      <h4>
                        PHASE 04 <i class="fa-solid fa-check"></i>
                      </h4>
                      <h2>20% SOLDOUT</h2>
                    </div>
                    <div class="slide__para">
                      <p>
                        Lorem lorem lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum sapiente dignissimos voluptas
                        rerum delectus. Sed, fuga inventore? Modi culpa
                        recusandae quisquam porro!
                      </p>
                    </div>
                  </div>
                  <div class="item p-2">
                    <div class="slide__title">
                      <h4>
                        PHASE 05 <i class="fa-solid fa-check"></i>
                      </h4>
                      <h2>50% SOLDOUT</h2>
                    </div>
                    <div class="slide__para">
                      <p>
                        Lorem lorem lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Eum sapiente dignissimos voluptas
                        rerum delectus. Sed, fuga inventore? Modi culpa
                        recusandae quisquam porro!
                      </p>
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
