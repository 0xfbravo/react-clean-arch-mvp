import React from 'react';
import ReactDOM from 'react-dom';
import TweetList from './TweetList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TweetList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
