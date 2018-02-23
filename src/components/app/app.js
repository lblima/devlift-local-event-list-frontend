import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';
import EventNew from '../local_events/event_new';
import EventEdit from '../local_events/event_edit';
import Footer from '../footer/footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
          <Switch>
              <Route exact path="/" component={ EventList } />
              <Route exact path="/newevent" component={ EventNew } />
              <Route exact path="/editevent/:id" component={ EventEdit } />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;