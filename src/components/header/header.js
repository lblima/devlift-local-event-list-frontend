import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';
import logo from '../../devlift-logo.svg';

export default () => {
    return (
        <header>
            <div className="header container">
                <img src={logo}  alt="Devlift" />
                <Link to="/newevent" className="btn btn-primary float-right">Add new event</Link>
            </div>
        </header>
    )
}