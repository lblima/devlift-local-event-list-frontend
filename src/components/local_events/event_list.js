import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EventList extends Component {

    componentWillMount() {
        this.props.fetchLocalEvents();
    }

    renderEventList(localEvent) {
         return (
             <li key={ localEvent.id }>
                { localEvent.description }
             </li>
         )
    }

    render() {
        return (
            <ul className="event-list">
                { this.props.localEvents.map(this.renderEventList) }
            </ul>
        )
    }
}

function mapStateToProps({localEvents}) {
    return { localEvents };
}

export default connect(mapStateToProps, actions)(EventList);