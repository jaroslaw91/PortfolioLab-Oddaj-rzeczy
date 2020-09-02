import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AppContextProvider from "./AppContext";
import Home from "./components/Home";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </AppContextProvider>
  );
}

export default App;
