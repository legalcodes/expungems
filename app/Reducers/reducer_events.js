import { FETCH_EVENTS } from "../Actions/index";

export default function( state = [], action ) {
  console.log("FETCH_EVENTS VARIABLE: ", FETCH_EVENTS);
  console.log('REDUCER_EVENTS: ', action);
  if (action.type === FETCH_EVENTS){ console.log("REDUCER PAYLOAD: ", action.payload);}
  switch(action.type){
    case FETCH_EVENTS:
    return [ action.payload, ...state ];
  }
  return state;
}
