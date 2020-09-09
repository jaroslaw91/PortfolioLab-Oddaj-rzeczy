import React, { Component } from 'react';

export default class ThreeColumns extends Component {
    render() {
        return (
            <div name="threeColums" className="threeColums" >
                <div className="threeColums__column">
                    <h2>10</h2>
                    <span>ODDANYCH WORKÓW</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="threeColums__column">
                    <h2>5</h2>
                    <span>WSPARTYCH ORGANIZACJI</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className="threeColums__column">
                    <h2>7</h2>
                    <span>ZORGANIZOWANY ZBIÓREK</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        );
    }
}
