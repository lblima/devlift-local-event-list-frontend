import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';
import EventNew from '../local_events/event_new';
import EventTypeNew from '../event_type/event_type_new';
import Footer from '../footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <EventList /> */}
        <Switch>
            <Route exact path="/" component={ EventList } />
            <Route exact path="/newevent" component={ EventNew } />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;