import React, { Component } from 'react';
import './Classification.scss';
import { ClassificationView } from '../ClassificationView';
import { ClassificationPresenter } from '../ClassificationPresenter';
import Tweet from '../../tweet/component/Tweet';
import TweetModel from '../../../model/TweetModel';

class Classification extends Component implements ClassificationView {
  private presenter: ClassificationPresenter = new ClassificationPresenter(this);
  private tweet: TweetModel = this.presenter.getRandomTweet()

  render() {
    return (
      <Tweet model={this.tweet} />
    );
  }
}

export default Classification;
