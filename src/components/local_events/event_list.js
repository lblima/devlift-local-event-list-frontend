import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Event from './event';

import './local_events.css';

class EventList extends Component {

    componentWillMount() {
        this.props.fetchLocalEvents();
    }

    renderEventList(localEvent) {
         return (
            <Event key={ localEvent.id } localEvent={localEvent} />
         );
    }

    render() {
        return (    
            <div className="container">       
                <h1>Upcoming Events</h1> 
                <div className="row">
                    { this.props.localEvents.map(this.renderEventList) }
                </div>
            </div>
        )
    }
}

function mapStateToProps({localEvents}) {
    return { localEvents };
}

export default connect(mapStateToProps, actions)(EventList);