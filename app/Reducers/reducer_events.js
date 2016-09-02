import FETCH_EVENTS from "../Actions/index";

export default function( state = [], action ) {
  console.log('REDUCER_EVENTS: ', action);
  switch(action.type){
    case FETCH_EVENTS:
    return [ action.payload, ...state ];
  }
  return state;
}
