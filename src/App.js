import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route exact path="/home" component={Home}/>
        <Route render={() => <h1>404: Page not found</h1>}/>
      </Switch>
    </Router>
  );
}

export default App;
