import _ from 'lodash';
import { FETCH_LOCAL_EVENTS, FETCH_LOCAL_EVENT, DESELECT_LOCAL_EVENT, 
            GENERAL_ERROR, CLEAR_GENERAL_ERROR } from '../actions/types';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return { ...state, data: [...action.payload] };
        case FETCH_LOCAL_EVENT:
            let localEvent;

            if (action.payload)
                localEvent = action.payload;

            return { ...state, selectedEvent: localEvent };
        case DESELECT_LOCAL_EVENT:
            return { ...state, selectedEvent: action.payload };
        case GENERAL_ERROR:
            return { ...state, error: action.payload };
        case CLEAR_GENERAL_ERROR:
            return { ...state, error: undefined };
    }

    return state;
}