import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';
import TweetModel from '../../../model/TweetModel';
import UserModel from '../../../model/UserModel';
import TagModel from '../../../model/TagModel';

/**
 * Creates a mock user model
 */
const newMockUserModel = (): UserModel => {
  return new UserModel((Math.floor(Math.random() * 10000) + 1).toString(), "Sir Algo", "https://tailwindcss.com/img/jonathan.jpg")
}

/**
 * Creates a mock tag model
 */
const newMockTag = (): TagModel => {
  return new TagModel(Math.floor(Math.random() * 10000) + 1, `Tag ${(Math.floor(Math.random() * 10000) + 1).toString()}`, Math.floor(Math.random() * 10000) + 1)
}

/**
 * Creates a mock tweet
 */
const newMockTweet = (): TweetModel => {
  return new TweetModel((Math.floor(Math.random() * 10000) + 1).toString(), `Tweet text`, new Date(), newMockUserModel(), [newMockTag(),newMockTag(),newMockTag()])
}

it('Renders Tweet Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tweet model={newMockTweet()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
