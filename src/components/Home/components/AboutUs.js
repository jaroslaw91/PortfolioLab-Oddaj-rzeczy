import React, { Component } from 'react';

import decoration from "./../../../assets/decoration.svg";
import signature from "./../../../assets/signature.svg";

export default class AboutUs extends Component {
    render() {
        return (
            <div className="aboutUs" name="aboutUs">
                <div className="aboutUs__box">
                    <h2>O nas</h2>
                    <img src={decoration} />
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <img src={signature} />
                </div>
                <div className="aboutUs__box" />
            </div>
        );
    }
}

