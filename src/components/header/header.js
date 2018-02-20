import React from 'react';

import './header.css';
import logo from '../../devlift-logo.svg';

export default () => {
    return (
        <header>
            <div className="header container">
                <img src={logo}  alt="Devlift" />
            </div>
        </header>
    )
}