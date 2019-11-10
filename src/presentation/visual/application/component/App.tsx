import React, { Component } from 'react';
import './App.scss';
import Navbar from '../../../visual/navbar/component/Navbar';
import Classification from '../../classification/component/Classification';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppView } from '../AppView';
import { AppPresenter } from '../AppPresenter';

class App extends Component implements AppView {
  private presenter: AppPresenter = new AppPresenter(this);

  public render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Classification} />
      </Router>
    );
  }
}

export default App;
