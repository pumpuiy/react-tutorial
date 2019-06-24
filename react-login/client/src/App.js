import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from './_components';
import { history } from './_helpers';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import LogoutPage from './LogoutPage/LogoutPage';
import './App.css';

class App extends Component {

  constructor (props) {
      super(props);
  }

  render() {

    return (
        <div className="container container-fluid">
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route exact path="/logout" component={LogoutPage} />
                    </div>
                </Router>
            </div>
    );
  }
}

export default (App);
