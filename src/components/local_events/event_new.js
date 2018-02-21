import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EventNew extends Component {
    
    constructor(props) {
        super(props);

        this.renderFieldDateTime = this.renderFieldDateTime.bind(this);        
    }
    componentWillMount() {
        this.props.fetchEventTypes();
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
            this.props.eventTypes.map(et => <option 
                                                key={ et.id } 
                                                value={ et.id }>{ et.description }
                                            </option>)
        );
    }

    onSubmit(values) {
        this.props.createEvent(values, () => {
            console.log("OK");
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;

        if (!this.props.eventTypes)
            return <div>loading...</div>

        return (
            <div className="container">
                <h1>New Local Event</h1> 
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field name="typeId" label="Event Type" component={ this.renderFieldSelect }>
                        <option></option>
                        { this.renderEventTypesOptions() }
                    </Field>
                    <Field 
                        label="Description"
                        name="description"
                        component={ this.renderFieldText }
                    />
                    <Field 
                        label="Date"
                        name="date"
                        component={ this.renderFieldDateTime }
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
                        <Link to="/" className="btn btn-danger float-left">Cancel</Link>
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

function mapStateToProps({ eventTypes }) {
    return { eventTypes };
}

export default reduxForm({
    validate,
    form: "EventNewForm"
})(connect(mapStateToProps, actions)(EventNew));