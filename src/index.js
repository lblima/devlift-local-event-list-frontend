import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import ReduxPromisse from 'redux-promise';
import AsyncPromisse from './middleware/async';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './components/app/app';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(AsyncPromisse)(createStore);

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Root />
    </Provider>, document.getElementById('root'));

registerServiceWorker();