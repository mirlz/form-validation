import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationPage from './views/RegistrationPage';
import './sass/custom.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RegistrationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;