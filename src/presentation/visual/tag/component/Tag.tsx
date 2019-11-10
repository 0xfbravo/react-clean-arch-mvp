import React, { Component } from 'react';
import './Tag.scss';
import TagModel from '../../../model/TagModel';
import { TagView } from '../TagView';
import { TagPresenter } from '../TagPresenter';

class Tag extends Component<{model: TagModel}> implements TagView {
  private presenter: TagPresenter = new TagPresenter(this);

  render() {
    return (
      <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker m-2">{this.props.model.name}</span>
    );
  }
}

export default Tag;
