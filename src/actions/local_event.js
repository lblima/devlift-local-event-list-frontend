import axios from 'axios';
import { FETCH_LOCAL_EVENTS, CREATE_EVENT, FETCH_LOCAL_EVENT, UPDATE_EVENT, DESELECT_LOCAL_EVENT } from './types';

export function fetchLocalEvents() {

    const request = axios.get("http://localhost:52344/api/event");

    return {
        type: FETCH_LOCAL_EVENTS,
        payload: request
    }
}

export function fetchLocalEvent(id) {

    const request = axios.get(`http://localhost:52344/api/event/${id}`);

    return {
        type: FETCH_LOCAL_EVENT,
        payload: request
    }
}

export function createEvent(value, callback) {
    const request = axios.post("http://localhost:52344/api/event", value)
        .then((response) => {
            callback()
        })
        .catch((error) => {
            console.log(error);
        });

    return {
        type: CREATE_EVENT,
        payload: request
    }
}

export function updateEvent(id, value, callback) {
    const request = axios.put(`http://localhost:52344/api/event/${id}`, value)
        .then((response) => {
            callback()
        })
        .catch((error) => {
            console.log(error);
        });

    return {
        type: UPDATE_EVENT,
        payload: request
    }
}

export function deselectEvent(value) {
    return {
        type: DESELECT_LOCAL_EVENT,
        payload: value
    }
}