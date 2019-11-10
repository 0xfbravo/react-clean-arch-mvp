import React, { Component } from 'react';
import './Classification.scss';
import { ClassificationView } from '../ClassificationView';
import { ClassificationPresenter } from '../ClassificationPresenter';
import Tweet from '../../tweet/component/Tweet';

class Classification extends Component implements ClassificationView {
  private presenter = new ClassificationPresenter(this);
  private tweet = this.presenter.getRandomTweet()

  render() {
    return (
      <Tweet model={this.tweet} />
    );
  }
}

export default Classification;
