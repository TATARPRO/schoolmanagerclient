import React from 'react';
import ReactDOM from 'react-dom';
import Page400 from './Page400';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page400 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
