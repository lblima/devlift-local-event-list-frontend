import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EventTypeNew from '../event_type/event_type_new';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './local_events.css';

class EventNew extends Component {

    componentWillMount() {
        this.props.fetchEventTypes();
    }

    showNewEventTypeForm() {
        this.props.showEventType();
    }

    renderFieldText(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group col-md-8 ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <input className="form-control" 
                    type="text"
                    { ...field.input }
                />

                <div className="text-danger">
                    { touched ? error: '' }
                </div>
            </div>
        )
    }

    renderFieldTextArea(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group col-md-8 ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <textarea className="form-control" style={{resize:"none"}}
                    { ...field.input }
                />

                <div className="text-danger">
                    { touched ? error: '' }
                </div>
            </div>
        )
    }

    renderFieldSelect(field) {
        const { children, meta: { touched, error } } = field;
        const className = `form-group col-md-4 ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <select className="form-control"  { ...field.input }>
                    { children }
                </select>
               
                <div className="text-danger">
                    { touched ? error: '' }
                </div>
            </div>
        )
    }

    renderFieldDateTime(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group col-md-4 ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                <DatePicker className="form-control"
                    {...field.input}
                    selected={field.input.value ? moment(field.input.value) : null}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="YYYY/MM/DD HH:mm"
                    timeCaption="time"
                    minDate={moment()}
                />

                <div className="text-danger">
                    { touched ? error: '' }
                </div>
            </div>
        )
    }

    renderEventTypesOptions() {
        return (
            this.props.eventType.data.map(et => <option 
                                                key={ et.id } 
                                                value={ et.id }>{ et.description }
                                            </option>)
        );
    }

    onSubmit(values) {
        this.props.createEvent(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;
        const classEventType = this.props.eventType.isEventTypeFormVisible ? 'show-component' : 'hide-component';

        if (!this.props.eventType.data)
            return <div>loading...</div>

        let eventTypeNew = <span></span>;

        if (this.props.eventType.isEventTypeFormVisible)
            eventTypeNew = <EventTypeNew />

        return (
            <div className="event-new container">

                <h1>New Local Event</h1> 
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="form-horizontal">
                    <Field name="typeId" label="Event Type" component={ this.renderFieldSelect }>
                        <option></option>
                        { this.renderEventTypesOptions() }
                    </Field>

                     {/* <span className="form-group-btn">
                        <button type="button" onClick={ () => this.showNewEventTypeForm() } className="btn btn-primary float-left">New Event Type</button>
                    </span> */}

                    { eventTypeNew }

                    <Field 
                        label="Description"
                        name="description"
                        component={ this.renderFieldText }
                    />
                    <Field 
                        label="Date"
                        name="date"
                        component={ this.renderFieldDateTime.bind(this) }
                    />
                    <Field 
                        label="Summary"
                        name="summary"
                        component={ this.renderFieldTextArea }
                    />
                    <Field 
                        label="Price"
                        name="price"
                        component={ this.renderFieldText }
                    />
                    <Field 
                        label="Image Url"
                        name="imageLink"
                        component={ this.renderFieldText }
                    />

                    <div className="form-group col-md-8">
                        <button type="submit" className="btn btn-primary float-left">Submit</button>
                        <Link to="/" className="btn btn-danger btn-cancel float-left">Cancel</Link>
                        <button type="button" onClick={ () => this.showNewEventTypeForm() } className="btn btn-primary float-left">New Event Type</button>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.typeId)
        errors.typeId = "Select an event type";

    if (!values.description)
        errors.description = "Enter a description";
    
    if (!values.summary)
        errors.summary = "Enter a Summary. It´s a more detailed description about the event";

    if (!values.date)
        errors.date = "Choose an event date";

    if (!values.price)
        errors.price = "Entrar the event price. If it´s a free event, enter 0";

    return errors;
}

function mapStateToProps({ eventType }) {
    return { eventType };
}

export default reduxForm({
    validate,
    form: "EventNewForm"
})(connect(mapStateToProps, actions)(EventNew));