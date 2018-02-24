import { GENERAL_ERROR } from '../actions/types';

export default ({ dispatch }) => {
    return next => action => {
        
        if (!action.payload || !action.payload.then)
            return next(action);
            
        action.payload
            .then(response => {
                const newAction = { ...action, payload: response };
                dispatch(newAction);
            })
            .catch(error => {
                console.log("async middleware", error)
                const newAction = { type: GENERAL_ERROR, payload: error };
                dispatch(newAction);
            })
    }
}