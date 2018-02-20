import axios from 'axios';

export const FETCH_LOCAL_EVENTS = 'fetch_local_events';

export function fetchLocalEvents() {

    return {
        type: FETCH_LOCAL_EVENTS,
        payload: [
            {
                id: 1,
                description: 'event 1'
            },
            {
                id: 2,
                description: 'event 2'
            }
        ]
    }
}