import React from 'react';

import decoration from "./../assets/decoration.svg";

function Main() {
    return (
        <main className="main" name="main">
            <div className="main__heading">
                <h1>Zacznij pomagać!<br />Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decoration} />
            </div>
        </main>
    );
}

export default Main;
