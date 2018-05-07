import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SiteBanner from './siteBanner';
import Landing from './landing';
import NavBar from './navBar';
class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <SiteBanner />
          <NavBar/>
            <Route exact path='/' component={Landing} />
            
        </main>

      </Router>
    );
  }
}

export default App;
