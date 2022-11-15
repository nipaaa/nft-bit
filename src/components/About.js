import React from 'react';
import title from '../assets/logo/title_shapes.svg';
import about1 from '../assets/section/about_us_img1.png';
import about2 from '../assets/section/about_us_img2.png';
import icon1 from '../assets/png/aboutus_card_icon1.png';
import icon2 from '../assets/png/aboutus_card_icon2.png';
import icon3 from '../assets/png/aboutus_card_icon3.png';

const About = () => {
    return (
        <div class="about__section" id="About">
        <div class="container">
            <div class="about__inner">
                <div class="row flex-row-reverse align-items-center">
                    <div class="col-lg-6">
                        <div class="about__us">
                            <div class="about__title">
                                <h4>THE STORY <img src={title} alt="image"/></h4>
                                <h2>ABOUT US</h2>
                            </div>
                            <div class="para">
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                                     literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
                                      College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical
                                       literature.</p>
                                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32
                                     and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin 
                                      professor at Hampden-Sydney</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="rotate__image">
                            <div class="image__section">
                                <div class="image">
                                    <img src={about1} alt="image"/>
                                </div>
                                <div class="title">
                                    <div class="v--v">
                                        <div class="v1__t">

                                        </div>
                                        <div class="v2__t">
    
                                        </div>
                                    </div>
                                    <div class="v--cir">

                                    </div>
                                </div>
                            </div>
                            <div class="image__section">
                                <div class="image">
                                    <img src={about2} alt="image"/>
                                </div>
                                <div class="title">
                                    <div class="v--v">
                                        <div class="v1__t">

                                        </div>
                                        <div class="v2__t">
    
                                        </div>
                                    </div>
                                    <div class="v--cir">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center play__to__earn">
                    <div class="col-md-4">
                        <div class="about__card">
                            <h3> <img src={icon1} alt="image"/> Gamming NFTs</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit odio adipisci est.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="about__card">
                            <h3> <img src={icon2} alt="image"/> Play to Earn</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit odio adipisci est.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="about__card mb-0">
                            <h3> <img src={icon3} alt="image"/> Gamming NFTs</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam impedit odio adipisci est.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </div>
    );
};

export default About;