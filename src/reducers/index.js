import { combineReducers } from 'redux';
import LocalEventReducer from './local_events';
import EventTypesReducer from './event_types';

const rootReducer = combineReducers({
    localEvents: LocalEventReducer,
    eventTypes: EventTypesReducer
});

export default rootReducer;