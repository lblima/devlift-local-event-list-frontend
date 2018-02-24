import { FETCH_LOCAL_EVENTS, FETCH_LOCAL_EVENT, DESELECT_LOCAL_EVENT, GENERAL_ERROR } from '../actions/types';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return { ...state, data: [...action.payload.data] };
        case FETCH_LOCAL_EVENT:
            let localEvent;

            if (action.payload)
                localEvent = action.payload.data;

            return { ...state, selectedEvent: localEvent };
        case DESELECT_LOCAL_EVENT:
            return { ...state, selectedEvent: undefined };
        case GENERAL_ERROR:
            return { ...state, error: action.payload };
    }

    return state;
}