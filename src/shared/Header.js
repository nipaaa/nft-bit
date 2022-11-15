import React from 'react';
import logo from '../assets/logo/logo1.png';
import up from '../assets/team/up__img.svg';

const Header = () => {
    return (
        <div>
             {/* <!-- header section start here --> */}
        <div class="header" id="Home">
            <div class="container">
                <div class="header__inner">
                    <div class="header__left">
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div class="header__right">
                        <div class="header__list">
                            <ul>
                                <li><a href="#Home">HOME</a></li>
                                <li><a href="#About">ABOUT</a></li>
                                <li><a href="#Roadmap">ROADMAP</a></li>
                                <li><a href="#Team">TEAM</a></li>
                                <li><a href="#FAQ">FAQ</a></li>
                                <li><a href="#">PAGES <i class="fa-solid fa-plus"></i></a></li>
                            </ul>
                        </div>
                        <div class="buttons">
                            <div class="mobile__icon__bar">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            
                            <button class="d-hide-991"><i class="fa-brands fa-discord"></i>JOIN <img class="rotatess" src={up} alt="image"/></button>
                            <button class="d-hide-767"><i class="fa-solid fa-wallet"></i>CONNECT <img class="rotatess" src={up} alt="image"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header section end here --> */}


        {/* <!-- mobile menu star here --> */}
        <div class="mobile__menu">
            <div class="mobile__header">
                <img src={logo} alt="image"/>
                <div class="cross__button">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <ul>
                <li><a href="#Home">HOME</a></li>
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#Roadmap">ROADMAP</a></li>
                <li><a href="#Team">TEAM</a></li>
                <li><a href="#FAQ">FAQ</a></li>
                <li><a href="#">PAGES <i class="fa-solid fa-plus mobile__icon__cross"></i></a></li>
            </ul>
        </div>
        {/* <!-- mobile menu end here --> */}
        </div>
    );
};

export default Header;