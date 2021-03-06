import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tutorial from './Home/Tutorial'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Tutorial} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
