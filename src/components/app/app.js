import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <EventList />
        </div>
      </div>
    );
  }
}

export default App;