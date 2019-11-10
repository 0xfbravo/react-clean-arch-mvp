import React from 'react';
import ReactDOM from 'react-dom';
import UserInfos from './UserInfos';
import UserModel from '../../../model/UserModel';

/**
 * Creates a mock user model
 */
function newMockUserModel(): UserModel {
  return new UserModel((Math.floor(Math.random() * 10000) + 1).toString(), "Sir Algo", "https://tailwindcss.com/img/jonathan.jpg")
}

it('Renders UserInfos Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserInfos model={newMockUserModel()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
