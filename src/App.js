import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './pages/home';
import Character from './pages/Character';
import Planet from './pages/Planet';
import Vehicle from './pages/Vehicle';
import Species from './pages/Species';
import NavigationBar from '../src/components/NavBar';

function App() {
  return (
    <>
    <Router>
    <NavigationBar/>
      <Switch>
        <Redirect exact from="/" to="/home"/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/character" component={Character}/>
        <Route exact path="/planet" component={Planet}/>
        <Route exact path="/vehicle" component={Vehicle}/>
        <Route exact path="/species" component={Species}/>
        <Route render={() => <h1>404: Page not found</h1>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
