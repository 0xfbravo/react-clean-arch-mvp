import React, { Component } from 'react';
import './Tweet.scss';
import Tag from '../../tag/component/Tag';
import TweetModel from '../../../model/TweetModel';
import UserInfos from '../../userinfos/component/UserInfos';
import { TweetView } from '../TweetView';
import { TweetPresenter } from '../TweetPresenter';

class Tweet extends Component<{model: TweetModel}> implements TweetView {
  private presenter = new TweetPresenter(this);

  render() {
    return (
      <div className="w-1/5 rounded overflow-hidden shadow-lg m-2">
        <UserInfos model={this.props.model.user} />
        <div className="px-6 py-4">
          <p className="text-grey-darker text-base">
            {this.props.model.msg}
          </p>
          <p className="text-grey-dark italic mt-5">{this.props.model.date.toDateString()}</p>
        </div>
        <div className="px-1 py-1">
          {this.props.model.tags.map(tag => <Tag key={tag.id} model={tag} />)}
        </div>
      </div>
    );
  }
}

export default Tweet;
