import React from 'react';
import ReactDOM from 'react-dom';
import Tweet from './Tweet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tweet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
