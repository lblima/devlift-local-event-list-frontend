import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import ReduxPromise from 'redux-promise';
// import AsyncPromise from './middleware/async';
import reduxThunk from  'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './components/app/app';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

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