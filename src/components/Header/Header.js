import React, { Component } from 'react';

import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";

export default class Header extends Component {
    render() {
        return (
            <header className="header" name="header">
                <nav className="header__nav">
                    <MobileMenu />
                    <DesktopMenu />
                </nav>
            </header>
        );
    }
}
