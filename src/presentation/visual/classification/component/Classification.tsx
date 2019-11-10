import React, { Component } from 'react';
import './Classification.scss';
import { ClassificationView } from '../ClassificationView';
import { ClassificationProps, classificationStateToProps, ClassificationPresenter } from '../ClassificationPresenter';
import Tweet from '../../tweet/component/Tweet';
import TweetModel from '../../../model/TweetModel';
import { connect } from 'react-redux';
import { loadNewTweet } from '../../../core/store/tweet/actions';

class Classification extends Component<ClassificationProps> implements ClassificationView {
  private presenter: ClassificationPresenter = new ClassificationPresenter(this);
  
  public render() {
    console.log(this.props)

    if (this.props.tweetReducer.currentTweet == undefined) {
      return (<span>Loading...</span> );
    }
    else {
      return (<Tweet model={this.props.tweetReducer.currentTweet} />);
    }
  }

  public updateTweetInformations(newTweet: TweetModel): void {
    this.props.loadNewTweet(newTweet);
  }
}



export default connect(classificationStateToProps, { loadNewTweet })(Classification);
