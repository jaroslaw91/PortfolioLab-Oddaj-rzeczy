import React, { Component } from 'react';
import { Link as Scroll } from "react-scroll";
import {
    HashRouter as Router,
    Link,
} from "react-router-dom";

import { AppContext } from "../../../AppContext";

export default class DesktopMenu extends Component {
    static contextType = AppContext;

    componentWillMount() {
        const context = this.context;
    }

    render() {
        return (
            <>
                <ul className="header__nav--desktop">
                    <Router>
                        <Link to="/login" className="header__nav--desktop-user" >
                            <li>Zaloguj</li>
                        </Link>
                        <Link to="/register" className="header__nav--desktop-user">
                            <li>Załóż konto</li>
                        </Link>
                    </Router>
                </ul>
                <ul className="header__nav--desktop">
                    <Scroll to="main" className="header__nav--desktop-item" activeClass="active" spy={this.spy} smooth={this.smooth} offset={this.offset} duration={this.duration}>
                        <li>Start</li>
                    </Scroll>
                    <Scroll to="fourSteps" className="header__nav--desktop-item" activeClass="active" spy={this.spy} smooth={this.smooth} offset={this.offset} duration={this.duration}>
                        <li>O co chodzi?</li>
                    </Scroll>
                    <Scroll to="aboutUs" className="header__nav--desktop-item" activeClass="active" spy={this.spy} smooth={this.smooth} offset={this.offset} duration={this.duration}>
                        <li>O nas</li>
                    </Scroll>
                    <Scroll to="whoWeHelp" className="header__nav--desktop-item" activeClass="active" spy={this.spy} smooth={this.smooth} offset={this.offset} duration={this.duration}>
                        <li>Fundacja i organizacje</li>
                    </Scroll>
                    <Scroll to="contact" className="header__nav--desktop-item" activeClass="active" spy={this.spy} smooth={this.smooth} offset={this.offset} duration={this.duration}>
                        <li>Kontakt</li>
                    </Scroll>
                </ul>
            </>
        );
    }
}