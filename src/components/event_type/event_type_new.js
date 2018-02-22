import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class EventTypeNew extends Component {

    addNewEventType() {
        const newEventType = {
            description: this.refs.event_type_description.value
        }

        this.props.createEventType(newEventType, () => {
            this.refs.event_type_description.value = '';
            this.props.fetchEventTypes();
            this.props.hideEventType();
        });
    }

    cancel() {
        this.refs.event_type_description.value = '';
        this.props.hideEventType();
    }
    
    render() {
        return (            
            <div className="row event-type-new">
                <div className="form-group form-group-sm col-sm-4">
                    <div className="row">
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="Event Type Description" ref="event_type_description" />
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

export default connect(null, actions)(EventTypeNew);