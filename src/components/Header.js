import React, { useContext } from 'react';
import { Link } from "react-scroll";

import { AppContext } from "./../AppContext";

function Header() {
    const { spy, smooth, offset, duration } = useContext(AppContext);

    return (
        <header className="header" name="header">
            <nav className="header__nav">
                <ul className="header__nav--list-mobile">
                    <span />
                    <span />
                    <span />
                </ul>
                <ul className="header__nav--list">
                    <li className="header__nav--list-user" >Zaloguj</li>
                    <li className="header__nav--list-user">Załóż konto</li>
                </ul>
                <ul className="header__nav--list">
                    <Link to="main" className="header__nav--list-item" activeClass="active" spy={spy} smooth={smooth} offset={offset} duration={duration}>
                        <li>Start</li>
                    </Link>
                    <Link className="header__nav--list-item" activeClass="s" spy={spy} smooth={smooth} offset={offset} duration={duration}>
                        <li>O co chodzi?</li>
                    </Link>
                    <Link className="header__nav--list-item" activeClass="s" spy={spy} smooth={smooth} offset={offset} duration={duration}>
                        <li>O nas</li>
                    </Link>
                    <Link className="header__nav--list-item" activeClass="s" spy={spy} smooth={smooth} offset={offset} duration={duration}>
                        <li>Fundacja i organizacje</li>
                    </Link>
                    <Link className="header__nav--list-item" activeClass="s" spy={spy} smooth={smooth} offset={offset} duration={duration}>
                        <li>Kontakt</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
