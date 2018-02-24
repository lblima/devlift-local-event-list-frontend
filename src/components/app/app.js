import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import Header from '../header/header';
import EventList from '../local_events/event_list';
import EventForm from '../local_events/event_form';
import Footer from '../footer/footer';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <div className="body-container">
          <Switch>
              <Route exact path="/" component={ EventList } />
              <Route exact path="/newevent" render={(props) => (<EventForm {...props} mode="create"/>)} />
              <Route exact path="/editevent/:id" render={(props) => (<EventForm {...props} mode="edit"/>)} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;