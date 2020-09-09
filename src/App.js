import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppContextProvider from "./AppContext";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AppContextProvider>
    );
  }
}

export default App;
