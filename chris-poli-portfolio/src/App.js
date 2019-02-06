import React, { Component } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./Views/Home.js";
import Projects from "./Views/Projects.js";
import Knowledge from "./Views/Knowledge";
import Contact from "./Views/Contact";
import Error from "./Views/Error"
import 'font-awesome/css/font-awesome.css'
import SideNavbar from "./Components/Navbars/SideNavbar";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import "../node_modules/video-react/dist/video-react.css"; // import css
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ProjectSummary from "./Components/Common/ProjectSummary";
import Awards from "./Views/Awards";
import Experience from "./Views/Experience";

class App extends Component {
  render() {
    return (

        <BrowserRouter>
            <div>
                <SideNavbar/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/projects" component={Projects} exact/>
                    <Route path="/projects/:id" component={ProjectSummary}/>
                    <Route path='/knowledge' component={Knowledge}/>
                    <Route path='/experience' component={Experience}/>
                    <Route path='/awards' component={Awards}/>
                    <Route path='/error' component={Error}/>
                    <Redirect to='/error'/>
                </Switch>
            </div>
        </BrowserRouter>

    );
  }
}

export default App;
