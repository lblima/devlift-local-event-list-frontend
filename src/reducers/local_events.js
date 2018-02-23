import { FETCH_LOCAL_EVENTS, FETCH_LOCAL_EVENT } from '../actions/types';

export default (state = {}, action) => {

    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return { ...state, data: [...action.payload.data] };
    }

    return state;
}