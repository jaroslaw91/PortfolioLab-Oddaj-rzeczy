import React, { Component } from 'react';
import {
    HashRouter as Router,
    Link,
} from "react-router-dom";

import decoration from "./../../../assets/decoration.svg";

export default class Main extends Component {
    render() {
        return (
            <main className="main" name="main" >
                <div className="main__heading">
                    <h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src={decoration} />
                    <div>
                        <Router>
                            <Link to="/login">
                                <p className="btn">Oddaj<br />rzeczy</p>
                            </Link>
                            <Link to="/login">
                                <p className="btn">Zorganizuj<br />zbiórkę</p>
                            </Link>
                        </Router>
                    </div>
                </div>
            </main>
        );
    }
}
