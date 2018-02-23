import { FETCH_EVENT_TYPES, SHOW_HIDE_EVENT_TYPE, SELECT_EVENT_TYPE } from '../actions/types';

export default (state = { }, action) => {

    switch(action.type) {
        case FETCH_EVENT_TYPES:
            // return Object.assign({}, state, { data: [...action.payload.data] });
            return { ...state, data: [...action.payload.data] };
        case SHOW_HIDE_EVENT_TYPE:
            // return Object.assign({}, state, { isEventTypeFormVisible: action.payload });
            return { ...state, isEventTypeFormVisible: action.payload };
        case SELECT_EVENT_TYPE:
            return { ...state, selectedTypeId: action.payload };
    }

    return state;
}