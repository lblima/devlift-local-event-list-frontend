import { combineReducers } from 'redux';
import LocalEventReducer from './local_events';

const rootReducer = combineReducers({
    localEvents: LocalEventReducer
});

export default rootReducer;