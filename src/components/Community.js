import React from 'react';
import footer from '../assets/section/footer.png';
import footerLeft from '../assets/png/footer__left.png';
import footerRight from '../assets/png/footer__right.png';
import logo from '../assets/logo/logo1.png';

const Community = () => {
    return (
        <div class="community__section">
        <div class="container">
            <div class="community__inner">
                <div class="community__title">
                    <h2>JOIN OUR COMMUNITY AND <br/> GET EARLY ACCESS <br/> 🤙 </h2>
                </div>
                <div class="banner__button footer__button">
                    <button>
                        WHITELIST NOW
                    </button>
                    <button>
                        <i class="fa-brands fa-discord"></i>JOIN DISCORD
                    </button>
                </div>
                <div class="footer__social">
                    <ul>
                        <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </div>
                <div class="footer__bg">
                    <img src={footer} alt=""/>
                </div>
            </div>
        </div>


        {/* <!-- footer section --> */}
        <div class="footer__section">
            <div class="footer__image">
                <div class="side__image left__side">
                    <img src={footerLeft} alt="image"/>
                </div>
                <div class="side__image right__side">
                    <img src={footerRight} alt="image"/>
                </div>
            </div>
            <div class="container">
                <div class="footer__inner">
                    <div class="header__inner">
                        <div class="header__left">
                            <a href="#"><img src={logo} alt="logo"/></a>
                        </div>
                        <div class="header__right">
                            <div class="copyright">
                                <p>Copyright © 2022 Abir</p>
                            </div>
                            <div class="to__up">
                                <a href="#Home"><i class="fa-solid fa-angle-up"></i></a>
                            </div>
                            <div class="header__list footers__list">
                                <ul>
                                    <li><a href="#">HOME</a></li>
                                    <li><a href="#">ABOUT</a></li>
                                    <li><a href="#">ROADMAP</a></li>
                                    <li><a href="#">TEAM</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
       </div>
       {/* <!-- footer section --> */}
   </div>
    );
};

export default Community;