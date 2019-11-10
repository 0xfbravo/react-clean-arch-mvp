import React from 'react';
import ReactDOM from 'react-dom';
import Classification from './Classification';

it('Renders Classification Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Classification />, div);
  ReactDOM.unmountComponentAtNode(div);
});
