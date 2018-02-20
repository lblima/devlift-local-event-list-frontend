import React from 'react';

import img_event1 from '../../event-01.jpg';
import img_event2 from '../../event-02.jpg';
import img_event3 from '../../event-03.jpg';

export default ({localEvent}) => {
    const price = localEvent.price == 0 ? 'Free' : new Intl.NumberFormat('en-CA', 
                {   style: 'currency', 
                    currency: 'CAD' 
                }).format(localEvent.price);

    const imgUrl = localEvent.imageLink != null ? localEvent.imageLink : img_event2;

    return (
        <div className="local-event col-md-4">
        <div className="card mb-4">
          <img className="card-img-top" src={ imgUrl } alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{ localEvent.description }<span> ({ price })</span></h5>
            <p className="card-text">{ `${localEvent.summary.substring(0, 80)}...` }</p>
            <div className="d-flex justify-content-between align-items-center">
              <span className="badge badge-light">{ localEvent.type.description }</span>
              <small className="text-muted">{ localEvent.date }</small>
            </div>
          </div>
        </div>
      </div>
    );
}