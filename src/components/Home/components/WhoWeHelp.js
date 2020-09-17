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
                <div className="whoWeHelp__header">
                    <h3
                        id={context.fundations.id}
                        onClick={context.onSelect}
                        className={context.fundations.desc === context.desc ? "active" : null}>
                        {context.fundations.name}
                    </h3>
                    <h3
                        id={context.organizations.id}
                        onClick={context.onSelect}
                        className={context.organizations.desc === context.desc ? "active" : null}>
                        {context.organizations.name}
                    </h3>
                    <h3
                        id={context.local.id}
                        onClick={context.onSelect}
                        className={context.local.desc === context.desc ? "active" : null}>
                        {context.local.name}
                    </h3>
                </div>
                <p className="desc">{context.desc}</p>
                {context.items.map(item => (
                    <div className="whoWeHelp__box" key={item.header}>
                        <div className="whoWeHelp__box--header">
                            <h3>{context.fundationName} {item.header}</h3>
                            <p>Cel i misja: {item.subheader}</p>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                ))}

            </div>
        );
    }
}

