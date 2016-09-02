import { FETCH_EVENTS } from "../Actions/index";

export default function( state = [], action ) {
  if (action.type === FETCH_EVENTS){ console.log("FETCH_EVENTS ACTION CAUGHT : ", action);}
  switch(action.type){
    case FETCH_EVENTS:
    return [ action.payload.data[0], ...state ];
  }
  return state;
}
