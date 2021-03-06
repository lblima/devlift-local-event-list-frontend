import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import LocalEventReducer from './local_events';
import EventTypesReducer from './event_types';

const rootReducer = combineReducers({
    form: formReducer,
    localEvent: LocalEventReducer,
    eventType: EventTypesReducer
});

export default rootReducer;