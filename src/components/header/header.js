import React from 'react';

import './header.css';
import logo from '../../logo3.jpg';

export default () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Local Event List, a DevLift App</h1>
        </header>
    )
}