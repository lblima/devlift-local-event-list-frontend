import axios from 'axios';
import { FETCH_LOCAL_EVENTS, CREATE_EVENT, FETCH_LOCAL_EVENT, UPDATE_EVENT, 
                DESELECT_LOCAL_EVENT, DELETE_EVENT, CLEAR_GENERAL_ERROR, GENERAL_ERROR } from './types';

export function fetchLocalEvents() {

    return dispatch => {
        const request = axios.get("http://localhost:52344/api/event")
            .then(response => {
                dispatch({
                    type: FETCH_LOCAL_EVENTS,
                    payload: response.data
                });
            });
    }
}

export function fetchLocalEvent(id) {

    return dispatch => {
        const request = axios.get(`http://localhost:52344/api/event/${id}`)
            .then(response => {
                dispatch({
                    type: FETCH_LOCAL_EVENT,
                    payload: response.data
                });
            });
    }
}

export function createEvent(value, callback) {
    return dispatch => {
        const request = axios.post("http://localhost:52344/api/event", value)
            .then((response) => {
                callback()

                dispatch({
                    type: CREATE_EVENT,
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

export function updateEvent(id, value, callback) {
    return dispatch => {
        const request = axios.put(`http://localhost:52344/api/event/${id}`, value)
            .then((response) => {
                callback();

                dispatch({
                    type: UPDATE_EVENT,
                    payload: request
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

export function deleteLocalEvent(id, callback) {

    return dispatch => {
        const request = axios.delete(`http://localhost:52344/api/event/${id}`)
            .then(response => {  
                callback();

                dispatch({
                    type: DELETE_EVENT,
                    payload: id
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

export function deselectEvent() {
    return {
        type: DESELECT_LOCAL_EVENT,
        payload: undefined
    }
}

export function clearError() {
    return {
        type: CLEAR_GENERAL_ERROR,
        payload: undefined
    }
}