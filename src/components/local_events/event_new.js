import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EventNew extends Component {
    
    renderFieldText(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

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

    onSubmit(values) {
        this.props.createEvent(values, () => {
            console.log("OK");
            this.props.history.push("/");
        });
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="container">
                <h1>Create New Event</h1> 
                <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                    <Field 
                        label="Description"
                        name="description"
                        component={ this.renderFieldText }
                    />
                    <Field 
                        label="Date"
                        name="date"
                        component={ this.renderFieldText }
                    />
                    <Field 
                        label="Summary"
                        name="summary"
                        component={ this.renderFieldText }
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

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                        <Link to="/" className="btn btn-danger float-right">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function validate(values) {

    const errors = {};

    if (!values.description)
        errors.description = "Enter a description";

    return errors;
}

export default reduxForm({
    validate,
    form: "EventNewForm"
})(connect(null, actions)(EventNew));