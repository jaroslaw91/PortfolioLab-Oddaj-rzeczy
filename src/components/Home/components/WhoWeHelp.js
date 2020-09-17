import React, { Component } from 'react';
import { AppContext } from "./../../../AppContext";

import decoration from "./../../../assets/decoration.svg";
import ToDo from "./Pagination";

export default class WhoWeHelp extends Component {
    static contextType = AppContext;

    render() {
        const { fundations, organizations, local, onSelect, desc } = this.context;

        return (
            <div className="whoWeHelp" name="whoWeHelp">
                <h2>Komu pomagamy?</h2>
                <img src={decoration} />
                <div className="whoWeHelp__header">
                    <h3
                        id={fundations.id}
                        onClick={onSelect}
                        className={fundations.desc === desc ? "active" : null}>
                        {fundations.name}
                    </h3>
                    <h3
                        id={organizations.id}
                        onClick={onSelect}
                        className={organizations.desc === desc ? "active" : null}>
                        {organizations.name}
                    </h3>
                    <h3
                        id={local.id}
                        onClick={onSelect}
                        className={local.desc === desc ? "active" : null}>
                        {local.name}
                    </h3>
                </div>
                <p className="desc">{desc}</p>
                <ToDo />

            </div>
        );
    }
}

