import React from 'react';
import ReactDOM from 'react-dom';
import EventList from '../local_events/event_list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventList />, div);
  ReactDOM.unmountComponentAtNode(div);
});