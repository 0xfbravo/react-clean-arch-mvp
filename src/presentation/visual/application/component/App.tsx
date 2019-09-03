import React, { Component } from 'react';
import './App.scss';
import Navbar from '../../../visual/navbar/component/Navbar';
import TweetList from '../../../visual/tweet-list/component/TweetList';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppView } from '../AppView';
import { AppPresenter } from '../AppPresenter';

class App extends Component implements AppView {
  private presenter = new AppPresenter(this);

  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={TweetList} />
      </Router>
    );
  }
}

export default App;
