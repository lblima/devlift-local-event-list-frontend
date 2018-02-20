import React, { Component } from 'react';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';
import Footer from '../footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EventList />
        <Footer />
      </div>
    );
  }
}

export default App;