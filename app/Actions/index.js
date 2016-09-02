// const ROOT_URL = process.env.DATABASE_URL ? "http://expunge-ms.org" : "http://localhost:5000";

import axios from 'axios';

const apiPath = "/api/v1/expungems";
const ROOT_URL = process.env.DATABASE_URL ? "http://expunge-ms.org" : "http://localhost:8080";
const ROOT_API = ROOT_URL + apiPath;

export const FETCH_EVENTS = "FETCH_EVENTS";

export function fetchEvents() {
  const url = ROOT_API;
  const result = axios.get(url);

  return {
    type: FETCH_EVENTS,
    payload: result
  };
};

// export function selectEvent(event) {
//     console.log('An event has been selected: ', event.title );
//     return {
//         type: 'EVENT_SELECTED',
//         payload: event
//     };
// }
