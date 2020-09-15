import React, { Component } from 'react';
import { Link as Scroll } from "react-scroll";
import {
    HashRouter as Router,
    Link,
} from "react-router-dom";

import { AppContext } from "./../../../AppContext";

export default class MobileMenu extends Component {
    static contextType = AppContext;

    render() {
        const context = this.context;

        return (
            <>
                <ul className={this.context.menu ? "header__nav--hmb-close" : "header__nav--hmb"} onClick={context.openMenu}>
                    <span />
                    <span />
                    <span />
                </ul>
                <div className="header__nav--mobile" style={context.menu ? { top: 0 } : { top: -2000 }} onClick={context.openMenu}>
                    <ul className="header__nav--mobile-list">
                        <Router>
                            <Link to="/login" className="header__nav--mobile-list-user" >
                                <li>Zaloguj</li>
                            </Link>
                            <Link to="/register" className="header__nav--mobile-list-user">
                                <li>Załóż konto</li>
                            </Link>
                        </Router>
                    </ul>
                    <ul className="header__nav--mobile-list">
                        <Scroll to="main" className="header__nav--mobile-list-item" activeClass="active">
                            <li>Start</li>
                        </Scroll>
                        <Scroll to="fourSteps" className="header__nav--mobile-list-item" activeClass="active" onClick={this.context.openMenu}>
                            <li>O co chodzi?</li>
                        </Scroll>
                        <Scroll to="aboutUs" className="header__nav--mobile-list-item" activeClass="active" onClick={this.context.openMenu}>
                            <li>O nas</li>
                        </Scroll>
                        <Scroll to="whoWeHelp" className="header__nav--mobile-list-item" activeClass="active" onClick={this.context.openMenu}>
                            <li>Fundacja i organizacje</li>
                        </Scroll>
                        <Scroll to="contact" className="header__nav--mobile-list-item" activeClass="active" onClick={this.context.openMenu}>
                            <li>Kontakt</li>
                        </Scroll>
                    </ul>
                </div>
            </>
        );
    }
}