import { FETCH_CREATURES } from '../actions';

export default function(state = [] , action) {
  switch (action.type) {
    case FETCH_CREATURES:
      return action.payload.data;
    default:
      return state;
  }
}
