import React from 'react';
import circleImg from '../assets/logo/circleimg.png';
import bg2 from '../assets/bg/bg2.png';
import charecter1 from '../assets/section/Character1.1.png';

const Banner = () => {
    return (
        <div class="banner__section">
        <div class="container">
            <div class="banner__inner">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="banner__info">
                            <h2>Crazy Meta 🎯 NFT collections</h2>
                        <h3>5426 / 5555 MINTED</h3>
                        <div class="banner__button">
                            <button>
                                MINT NOW
                            </button>
                            <button>
                                WHITELIST NOW
                            </button>
                        </div>
                        <ul>
                            <li>MAX 2 NFTS PER WALLET . PRICE 0.09 ETH + GAS</li>
                            <li>MINT IS LIVE <span>UNTIL 25 APR 04:00H</span></li>
                            <li>PRESALE : SOLDOUT</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="image__section banner">
                            <div class="live__circle">
                                <div class="image__circle">
                                    {/* <span><i class="fa-solid fa-arrow-down"></i></span> */}
                                    <span><i class="fa-solid fa-down"></i></span>
                                    <span><img src={circleImg} alt="image"/></span>
                                </div>
                            </div>
                            <div class="section__bg">
                                <img src={bg2} alt="image"/>
                            </div>
                            <div class="section__img">
                                <img src={charecter1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;