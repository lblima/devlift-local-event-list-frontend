import { FETCH_LOCAL_EVENTS } from '../actions/types';

export default (state = [], action) => {

    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return [...action.payload.data];
    }

    return state;
}