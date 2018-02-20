import { FETCH_LOCAL_EVENTS } from '../actions';

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_LOCAL_EVENTS:
            return [...state, ...action.payload];
    }

    return state;
}