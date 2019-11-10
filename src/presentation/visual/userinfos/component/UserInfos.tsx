import React, { Component } from 'react';
import './UserInfos.scss';
import UserModel from '../../../model/UserModel';
import { UserInfosPresenter } from '../UserInfosPresenter';
import { UserInfosView } from '../UserInfosView';

class UserInfos extends Component<{model: UserModel}> implements UserInfosView {
  private presenter: UserInfosPresenter = new UserInfosPresenter(this);

  public render() {
    return (
        <div className="px-6 py-4 flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={this.props.model.photoURL} />
          <div className="text-sm">
            <p className="text-black leading-none">{this.props.model.name}</p>
          </div>
        </div>
    );
  }
}

export default UserInfos;
