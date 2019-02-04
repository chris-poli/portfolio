import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./Views/Home.js";
import Projects from "./Views/Projects.js";
import Skills from "./Views/Skills";
import Contact from "./Views/Contact";
import Error from "./Views/Error"
import 'font-awesome/css/font-awesome.css'

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
               <Route path="/" component={Home} exact/>
               <Route path="/projects" component={Projects}/>
                <Route path='/skills' component={Skills}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/error' component={Error}/>
                <Redirect to='/error'/>
            </Switch>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
