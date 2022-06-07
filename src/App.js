import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Sidebar2 from './components/sidebar2'
import {
  Switch,
  Route
} from "react-router-dom"
import Images from './components/images'
import Writing from './components/writing'
import Home from './components/home'
import Projects from './components/projects'

class App extends Component {
  render() {
    return (

      <div id="colorlib-page">
        <Switch>
        <div id="container-wrap">
          <Route exact path="/" component={Sidebar2} />
          <Route path="/photos" component={Sidebar} />
          <Route path="/portfolio" component={Sidebar}  />
          <Route path="/projects" component={Sidebar}  />
        <div id="colorlib-main">
             <Route exact path="/" component={Home} />
             <Route path="/photos" component={Images} />
             <Route path="/portfolio" component={Writing}  />
             <Route path="/projects" component={Projects}  />
           </div>
         </div>
         </Switch>
      </div>
    );
  }
}

export default App;
