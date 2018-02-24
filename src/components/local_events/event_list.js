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
        if (this.props.localEvent.error) {
            return (
                <h1>Ops, something went wrong. Try again later.</h1> 
            )
        }
        
        if (!this.props.localEvent.data) {
            return (
                <div className="loading"></div>
            )
        }
        
        return (    
            <div className="event-list-container container">       
                <h1>
                    {
                        this.props.localEvent.data.length > 0 ? "Upcoming Events" : "There´s no Upcoming Events"
                    }
                </h1> 
                <div className="row">
                    { this.props.localEvent.data.length > 0 ? this.props.localEvent.data.map(this.renderEventList) : '' }
                </div>
            </div>
        )
    }
}

function mapStateToProps({localEvent}) {
    return { localEvent };
}

export default connect(mapStateToProps, actions)(EventList);