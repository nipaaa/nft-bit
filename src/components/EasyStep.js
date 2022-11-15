import React from 'react';
import title from '../assets/bg/title_shapes.svg';

const EasyStep = () => {
    return (
        <div class="easy__step__section">
    <div class="container">
        <div class="easy__step__inner">
            <div class="title__easy">
                <h4>EASY STEPS <img src={title} alt=""/></h4>
                <h2>HOW TO MINT</h2>
            </div>
            <div class="the__steps">
                <ul>
                    <li>
                        <h4 class="green">1</h4>
                        <p>Collect Your Wallet</p>
                    </li>
                    <li>
                        <h4 class="blue">2</h4>
                        <p>Select Your Quantity</p>
                    </li>
                    <li>
                        <h4 class="yellow">3</h4>
                        <p>Confirm The Transaction</p>
                    </li>
                    <li>
                        <h4 class="red">4</h4>
                        <p>Revive Your NFTs</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
   </div>
    );
};

export default EasyStep;