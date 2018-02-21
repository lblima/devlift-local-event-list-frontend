import { FETCH_EVENT_TYPES } from '../actions/types';

export default (state = [], action) => {

    switch(action.type){
        case FETCH_EVENT_TYPES:
            return [...action.payload.data]
    }

    return state;
}