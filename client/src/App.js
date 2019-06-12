import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import NewUser from './components/NewUsers';
import UsersList from './components/UsersList';
import User from './components/User';
import Items from './components/Items';
import Pantries from './components/Pantries';


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

          <div>
          <Switch>
              <Route exact path="/home" component={ Home } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/newusers" component={ NewUser } />
              <Route exact path="/userslist" component={ UsersList } />
              <Route path="/userslist/:userId" component={ User } />
              <Route exact path="/items" component={ Items } />
              <Route path="/items/:itemId" component={ Items } />
              <Route exact path="/pantries" component={ Pantries } />
              <Route path="/pantries/:pantryId" component={ Pantries } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
