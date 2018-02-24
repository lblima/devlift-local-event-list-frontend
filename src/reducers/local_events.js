import { FETCH_LOCAL_EVENTS, FETCH_LOCAL_EVENT, DESELECT_LOCAL_EVENT } from '../actions/types';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return { ...state, data: [...action.payload.data] };
        case FETCH_LOCAL_EVENT:
            return { ...state, selectedEvent: action.payload.data };
        case DESELECT_LOCAL_EVENT:
            return { ...state, selectedEvent: undefined };
    }

    return state;
}