import axios from 'axios';
import { FETCH_EVENT_TYPES, CREATE_EVENT_TYPE, SHOW_HIDE_EVENT_TYPE, 
            SELECT_EVENT_TYPE,GENERAL_ERROR } from './types';

export function fetchEventTypes() {
    return dispatch => {
        const request = axios.get("http://localhost:52344/api/eventtype")
            .then(response => {
                dispatch({
                    type: FETCH_EVENT_TYPES,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GENERAL_ERROR,
                    payload: error.response.data
                });
            });
    }
}

export function createEventType(value, callback) {
    return dispatch => {
        const request = axios.post("http://localhost:52344/api/eventtype", value)
            .then((response) => {
                callback(response.data.id)

                dispatch({
                    type: CREATE_EVENT_TYPE,
                    payload: response.data
                });
            })
            .catch((error) => {
                dispatch({
                    type: GENERAL_ERROR,
                    payload: error.response.data
                });
            });
    }
}

export function showEventType() {
    return {
        type: SHOW_HIDE_EVENT_TYPE,
        payload: true
    }
}

export function hideEventType() {
    return {
        type: SHOW_HIDE_EVENT_TYPE,
        payload: false
    }
}

export function selectEventType(value) {
    return {
        type: SELECT_EVENT_TYPE,
        payload: value
    }
}