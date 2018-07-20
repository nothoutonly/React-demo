import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './containers/CommentApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
