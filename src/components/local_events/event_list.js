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
            <table className="event-list table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Summary</th>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.localEvents.map(this.renderEventList) }
                </tbody>                
            </table>
        )
    }
}

function mapStateToProps({localEvents}) {
    return { localEvents };
}

export default connect(mapStateToProps, actions)(EventList);