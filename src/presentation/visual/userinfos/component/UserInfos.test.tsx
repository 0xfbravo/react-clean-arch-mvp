import React from 'react';
import ReactDOM from 'react-dom';
import UserInfos from './UserInfos';
import UserModel from '../../../model/UserModel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfos model={new UserModel("", "", "")} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
