import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import PhoneList from './components/PhoneList/PhoneList';
import PhoneDetail from './components/PhoneDetail/PhoneDetail';

import './Router.css';

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact component={PhoneList} />
        <Route path="/detail" exact component={PhoneDetail} />
      </BrowserRouter>
    );
  }
}

export default Router;
