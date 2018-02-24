import React from 'react';
import ReactDOM from 'react-dom';
import EventForm from '../local_events/event_form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});