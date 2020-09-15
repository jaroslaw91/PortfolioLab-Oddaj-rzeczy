import React, { Component } from 'react';
import { AppContext } from "./../../../AppContext";

import decoration from "./../../../assets/decoration.svg";

export default class WhoWeHelp extends Component {
    static contextType = AppContext;

    render() {
        const context = this.context;

        return (
            <div className="whoWeHelp" name="whoWeHelp">
                <h2>Komu pomagamy?</h2>
                <img src={decoration} />
                <div className="whoWeHelp__box">
                    <h3>{context.fundations.name}</h3>
                    <h3>{context.organizations.name}</h3>
                    <h3>{context.local.name}</h3>
                </div>
            </div>
        );
    }
}

