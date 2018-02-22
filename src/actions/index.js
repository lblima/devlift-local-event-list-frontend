import axios from 'axios';
import { FETCH_LOCAL_EVENTS, FETCH_EVENT_TYPES, CREATE_EVENT, 
                CREATE_EVENT_TYPE, SHOW_HIDE_EVENT_TYPE } from './types';

export function fetchLocalEvents() {

    const request = axios.get("http://localhost:52344/api/event");

    return {
        type: FETCH_LOCAL_EVENTS,
        payload: request
    }
}

export function createEvent(value, callback) {
    const request = axios.post("http://localhost:52344/api/event", value)
        .then(() => callback());

    return {
        type: CREATE_EVENT,
        payload: request
    }
}

export function fetchEventTypes() {
    const request = axios.get("http://localhost:52344/api/eventtype");

    return {
        type: FETCH_EVENT_TYPES,
        payload: request 
    }
}

export function createEventType(value, callback) {
    const request = axios.post("http://localhost:52344/api/eventtype", value)
        .then(() => callback());

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