import React, { Component } from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./home.js";
import Restws from "./restws/restws.js";
import College from "./propsandtypes/college.js";
import RenderDOM from "react-dom";

class App extends Component {
  render() {
	  return (
		<HashRouter>
			<div >
					<ul className = "header">
						<li><NavLink to="/">Home</NavLink></li>
						<li><NavLink to="/restws">RestWS Demo</NavLink></li>
						<li><NavLink to="/college">Props Demo</NavLink></li>
					</ul>
					<div >
						<Route exact path="/" component={Home}/>
						<Route path="/restws" component={Restws}/>
						<Route path="/college" component={College}/>
					</div>
				
			 </div>
		</HashRouter>
	  );
   }
}



export default App;
