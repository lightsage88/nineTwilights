import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import SiteBanner from './siteBanner';
import Landing from './landing';
import NavBar from './navBar';
import Home from './home';
import Latest from './latest';
import Archive from './archive';
import Cast from './cast';
import About from './about';
import Team from './team';
//pictures for app in general
import parchmentPaperGraphic from '../staticAssets/PARCHMENT-PAPER-GRAPHIC.png';
//put the graphic in via css?
class App extends Component {
  render() {
    return (
      <Router>
        <main>
          <SiteBanner />
          <NavBar/>
          <section id='parchment' className='parchmentZone'>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home}/>
            <Route exact path='/latest' component={Latest}/>
            <Route exact path='/archive' component={Archive}/>
            <Route exact path='/cast' component={Cast}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/team' component={Team}/>
          </section>
        </main>

      </Router>
    );
  }
}

export default App;
