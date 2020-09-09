import React, { Component } from 'react';
import {
    HashRouter as Router,
    Link,
} from "react-router-dom";

import decoration from "./../../../assets/decoration.svg";
import icon1 from "./../../../assets/icon1.png";
import icon2 from "./../../../assets/icon2.png";
import icon3 from "./../../../assets/icon3.png";
import icon4 from "./../../../assets/icon4.png";

export default class FourSteps extends Component {
    render() {
        return (
            <div name="fourSteps" className="fourSteps" >
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={decoration} />
                <div className="fourSteps__box">
                    <div>
                        <img src={icon1} />
                        <span>Wybierz rzeczy</span>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div>
                        <img src={icon2} />
                        <span>Spakuj je</span>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div>
                        <img src={icon3} />
                        <span>Zdecyduj komu chcesz pomóc</span>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div>
                        <img src={icon4} />
                        <span>Zamów kuriera</span>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <Router>
                    <Link to="/login">
                        <p className="btn">Oddaj<br />rzeczy</p>
                    </Link>
                </Router>
            </div>
        );
    }
}
