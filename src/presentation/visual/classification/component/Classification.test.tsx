import React from 'react';
import ReactDOM from 'react-dom';
import Classification from './Classification';
import { Provider } from 'react-redux';
import { configureStore } from '../../../core/store';

it('Renders Classification Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={configureStore()}><Classification /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
