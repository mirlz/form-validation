import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrationPage from './views/RegistrationPage';
import './App.css';

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