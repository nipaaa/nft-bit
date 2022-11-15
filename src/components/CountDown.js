import React from 'react';
import top from "../assets/logo/countdown__side__top.png";
import bottom from "../assets/logo/countdown__side__bottom.png";

const CountDown = () => {
    return (
        <div class="countdown__section">
        <div class="container">
            <ul>
                <li>
                    <h3>5k</h3>
                    <h4>Total Item</h4>
                </li>
                <li>
                    <h3>5k</h3>
                    <h4>Total Item</h4>
                </li>
                <li>
                    <h3>5k</h3>
                    <h4>Total Item</h4>
                </li>
                <li>
                    <h3>5k</h3>
                    <h4>Total Item</h4>
                </li>
            </ul>
        </div>
        <div class="squire__shape shape-1">
            <img src={top} alt="image"/>
        </div>
        <div class="squire__shape shape-2">
            <img src={bottom} alt="image"/>
        </div>
        <div class="squire__shape shape-3">
            <img src={bottom} alt="image"/>
        </div>
        <div class="squire__shape shape-4">
            <img src={top} alt="image"/>
        </div>
   </div>
    );
};

export default CountDown;