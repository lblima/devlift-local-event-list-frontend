import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class EventTypeNew extends Component {

    addNewEventType() {
        const newEventType = {
            description: this.refs.event_type_description.value
        }

        this.props.createEventType(newEventType, () => {
            this.props.fetchEventTypes();
            this.props.hideEventType();
        });
    }

    cancel() {
        this.props.hideEventType();
    }
    
    renderTextBox() {
        let value = '';

        if (!this.props.eventType.isEventTypeFormVisible) {
            value = '';
        }

        return <input type="text" className="form-control" placeholder="Event Type Description" ref="event_type_description" />
    }

    render() {
        return (            
            <div className="row event-type-new">
                <div className="form-group form-group-sm col-sm-4">
                    <div className="row">
                        <div className="col-sm-9">
                            { this.renderTextBox() }
                        </div>
                    </div>
                </div>

                <div className="form-group form-group-sm col-sm-4">
                    <div className="row">
                        <div className="col-sm-9">
                            <button type="button" className="btn btn-primary float-left" onClick={ this.addNewEventType.bind(this) }>Add</button>
                            <button type="button" className="btn btn-danger btn-cancel float-left" onClick={ this.cancel.bind(this)}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ eventType }) {
    return { eventType };
}

export default connect(mapStateToProps, actions)(EventTypeNew);