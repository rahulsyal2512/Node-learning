import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signup from './App';
import Login from './login';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
		<div className="style">
			<Route exact path="/" component={Login}></Route>
			<Route path="/Login" component={Login}></Route>
			<Route path="/Signup" component={Signup}></Route>
		</div>
	</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
