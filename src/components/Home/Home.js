import React, { Component } from 'react';

import Main from "./components/Main";
import ThreeColumns from "./components/ThreeColumns";
import FourSteps from "./components/FourSteps";
import AboutUs from "./components/AboutUs";
import WhoWeHelp from "./components/WhoWeHelp";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default class Home extends Component {
    render() {
        return (
            <>
                <Main />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WhoWeHelp />
                <Contact />
                <Footer />
            </>
        );
    }
}
