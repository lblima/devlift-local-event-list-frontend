import axios from 'axios';
import { FETCH_EVENT_TYPES, CREATE_EVENT_TYPE, SHOW_HIDE_EVENT_TYPE, SELECT_EVENT_TYPE } from './types';

export function fetchEventTypes() {
    const request = axios.get("http://localhost:52344/api/eventtype");

    return {
        type: FETCH_EVENT_TYPES,
        payload: request 
    }
}

export function createEventType(value, callback) {
    const request = axios.post("http://localhost:52344/api/eventtype", value)
        .then((response) => {
            callback(response.data.id)
        })
        .catch(function (error) {
            console.log(error);
          });

    return {
        type: CREATE_EVENT_TYPE,
        payload: request
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