import React, { Component } from 'react';
import './Classification.scss';
import { ClassificationView } from '../ClassificationView';
import { ClassificationPresenter } from '../ClassificationPresenter';
import Tweet from '../../tweet/component/Tweet';
import TweetModel from '../../../model/TweetModel';
import { connect } from 'react-redux';
import { AppState } from '../../../core/store';
import { loadNewTweet } from '../../../core/store/tweet/actions';
import { TweetState } from '../../../core/store/tweet/types';

interface AppProps {
  loadNewTweet: typeof loadNewTweet;
  tweet: TweetState;
}

class Classification extends Component<AppProps> implements ClassificationView {
  private presenter: ClassificationPresenter = new ClassificationPresenter(this);
  
  public render() {
    console.log(this.props)

    if (this.props.tweet.currentTweet == undefined) {
      return (<span>Loading...</span> );
    }
    else {
      return (<Tweet model={this.props.tweet.currentTweet} />);
    }
  }

  public updateTweetInformations(newTweet: TweetModel): void {
    this.props.loadNewTweet(newTweet);
  }
}

const mapStateToProps = (state: AppState) => ({
  tweet: state.tweet
})

export default connect(mapStateToProps, { loadNewTweet })(Classification);
