import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import img_event1 from '../../event-03.jpg';

export default ({localEvent}) => {
    const price = localEvent.price === 0 ? 'Free' : new Intl.NumberFormat('en-CA', 
                {   style: 'currency', 
                    currency: 'CAD' 
                }).format(localEvent.price);
                
    const imgUrl = (localEvent.imageLink != null && localEvent.imageLink != "") ? localEvent.imageLink : img_event1;
    const eventDate = moment(localEvent.date).format('MMMM Do YYYY, h:mm A').toString();

    return (
        <div className="local-event-list col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={ imgUrl } alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{ `${localEvent.description.substring(0, 40)}...` }<span> ({ price })</span></h5>
                <p className="card-text">{ `${localEvent.summary.substring(0, 80)}...` }</p>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="badge badge-light">{ localEvent.typeDescription }</span>
                    <small className="text-muted">{ eventDate }</small>
                </div>
            </div>
            <p><Link to={`/editevent/${localEvent.id}`} className="btn btn-primary float-right btn-edit-event">Edit event</Link></p>
        </div>
      </div>
    );
}