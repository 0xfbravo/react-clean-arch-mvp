import React, { Component } from 'react';
import Tweet from '../../tweet/component/Tweet';
import './TweetList.scss';
import TweetModel from '../../../model/TweetModel';
import UserModel from '../../../model/UserModel';
import TagModel from '../../../model/TagModel';
import { TweetListView } from '../TweetListView';
import { TweetPresenter } from '../../tweet/TweetPresenter';

class TweetList extends Component<{}> implements TweetListView {
  private presenter = new TweetPresenter(this);
  tweets: Array<TweetModel>

  constructor(props: Readonly<{}>) {
    super(props)

    // TODO: Remove this mock
    const user = new UserModel("1298739217", "Sir Algo", "https://tailwindcss.com/img/jonathan.jpg")
    const tag = new TagModel(0, "tag1", 2)

    this.tweets = [
      new TweetModel("1832981", `This is exhausting. Democrats blame:
      Russia
      Twitter
      YouTube
      Comey
      Jill Stein
      Wikileaks
      Antifa
      Millenials
      
      But the party won't look in the mirror and recognize that it has utterly failed to mount a meaningful challenge to social and economic injustice, & thus is losing support.`, new Date(), user, [tag,tag,tag,tag,tag,tag,tag,tag,tag,tag]),
      new TweetModel("1832981", "The hard truth about the United States is that the money other countries spend on health and infrastructure, we spend on war.", new Date(), user, [tag,tag,tag,tag,tag,tag]),
      new TweetModel("1832981", "Only 8 months into the Trump Presidency we are on the brink of nuclear war and Nazis are in streets of an American city. Seems about right", new Date(), user, [tag]),
      new TweetModel("1832981", "Today's Eyebrow: Plucked thin, defiant. A brow that says “You'll soon find out that some wizarding families are better than others, Potter”", new Date(), user, [tag]),
      new TweetModel("1832981", "The Democrats’ biggest donor says the party is blowing it and should get behind Bernie’s platform", new Date(), user, [tag]),
      new TweetModel("1832981", "Americans often ask me to define the British word \"Wanker\".", new Date(), user, [tag])
    ]
  }

  render() {
    return (
      <div className="flex items-center content-center flex-wrap">
          {this.tweets.map(tweet => <Tweet model={tweet} />)}
      </div>
    );
  }
}

export default TweetList;
