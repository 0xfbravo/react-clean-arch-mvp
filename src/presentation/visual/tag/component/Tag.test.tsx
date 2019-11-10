import React from 'react';
import ReactDOM from 'react-dom';
import Tag from './Tag';
import { TagModel } from '../../../model/TagModel';

/**
 * Creates a mock tag model
 */
const newMockTag = (): TagModel => {
  return new TagModel(Math.floor(Math.random() * 10000) + 1, `Tag ${(Math.floor(Math.random() * 10000) + 1).toString()}`, Math.floor(Math.random() * 10000) + 1)
}

it('Renders Tag Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tag model={newMockTag()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
