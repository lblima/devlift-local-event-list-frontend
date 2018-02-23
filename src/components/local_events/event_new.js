import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EventTypeNew from '../event_type/event_type_new';
import CurrencyInput from 'react-currency-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './local_events.css';

class EventNew extends Component {

    componentWillMount() {
        this.props.fetchEventTypes();
    }

    componentWillUnmount() {
        this.props.selectEventType(undefined);
    }

    componentWillUpdate() {
        if (this.props.eventType.selectedTypeId)
            this.props.change("typeId", this.props.eventType.selectedTypeId); //Update the EventType Select with the new added EventType
    }

    showNewEventTypeForm() {
        this.props.showEventType();
    }

    renderFieldText(field) {
        const { meta: { touched, error } } = field;
        let className = `form-group col-md-8 ${ touched && error ? 'has-danger' : '' }`;
        let inputField =    <input className="form-control" 
                                type="text"
                                { ...field.input }
                            />

        if (field.input.name == "price") {
            className = `form-group col-md-2 ${ touched && error ? 'has-danger' : '' }`;
            inputField = <CurrencyInput className="form-control"  
                            { ...field.input } 
                        />
        }

        return (
            <div className={ className }>
                <label>{ field.label }</label>
                { inputField }
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
        const className = `form-inline ${ touched && error ? 'has-danger' : '' }`;

        return (
            <div className={ className }>
                <div className="event-type-select mx-sm-3 mb-2">
                    <label>{ field.label }</label>
                    <select className="form-control" { ...field.input }>
                        { children }
                    </select>

                     <div className="text-danger">
                        { touched ? error: '' }
                    </div>
                </div>
                <button type="button" onClick={ () => this.showNewEventTypeForm() } className="btn btn-primary float-left">New Event Type</button>
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

    renderEventTypeForm() {
        let eventTypeNew = <span></span>;

        if (this.props.eventType.isEventTypeFormVisible)
            eventTypeNew = <EventTypeNew />

        return eventTypeNew;
    }

    onSubmit(values) {
        this.props.createEvent(values, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;

        if (!this.props.eventType.data) {
            return (
                <div className="loading"></div>
            )
        }

        return (
            <div className="event-new container">

                <h1>New Local Event</h1> 
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } className="form-horizontal">
                    <Field name="typeId" label="Event Type" component={ this.renderFieldSelect.bind(this) }>
                        <option></option>
                        { this.renderEventTypesOptions() }
                    </Field>

                    { this.renderEventTypeForm() }

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
                        label="Image Url (jpeg, jpg, gif or png)"
                        name="imageLink"
                        component={ this.renderFieldText }
                    />

                    <div className="form-group col-md-8">
                        <button type="submit" className="btn btn-primary float-left">Submit</button>
                        <Link to="/" className="btn btn-danger btn-cancel float-left">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function checkImageURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

function validate(values) {

    const errors = {};

    // console.log(values);

    if (!values.typeId)
        errors.typeId = "Select an event type";

    if (!values.description)
        errors.description = "Enter a description";

    if (values.description && values.description.length < 3)
        errors.description = "Please enter more than 3 characters";
    
    if (!values.summary)
        errors.summary = "Enter a Summary. It´s a more detailed description about the event";

    if (!values.date)
        errors.date = "Choose an event date";

    if (values.imageLink) {
        if (!checkImageURL(values.imageLink))
            errors.imageLink = "Invalid image url";
    }

    return errors;
}

function mapStateToProps({ eventType }) {
    return { eventType };
}

export default reduxForm({
    validate,
    form: "EventNewForm"
})(connect(mapStateToProps, actions)(EventNew));