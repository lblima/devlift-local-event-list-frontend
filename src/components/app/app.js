import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          <EventList />
        </p>
      </div>
    );
  }
}

export default App;