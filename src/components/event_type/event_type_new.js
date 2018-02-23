import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class EventTypeNew extends Component {

    addNewEventType() {
        const value = this.refs.event_type_description.value;

        if (value) {

            const eventType = this.props.eventType.data.find(e => e.description == value);

            if (!eventType) {
                const newEventType = {
                    description: this.refs.event_type_description.value
                }

                this.props.createEventType(newEventType, (id) => {
                    this.props.fetchEventTypes();
                    this.props.hideEventType();
                    this.props.selectEventType(id);
                });
            }
        }
    }

    cancel() {
        this.props.hideEventType();
    }
    
    render() {
        return (
            <div className="form-inline" style={{ marginBottom: 20 + "px" }}>
                <div className="alert alert-primary" role="alert">
                    Write in the box below your new event type.
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" className="form-control" placeholder="Event Type Description" ref="event_type_description" />
                </div>
                <button type="button" className="btn btn-primary mb-2" onClick={ this.addNewEventType.bind(this) }>Add</button>
                <button type="button" className="btn btn-danger btn-cancel mb-2" onClick={ this.cancel.bind(this)}>Cancel</button>
            </div>
        )
    }
}

function mapStateToProps({ eventType }) {
    return { eventType };
}

export default connect(mapStateToProps, actions)(EventTypeNew);