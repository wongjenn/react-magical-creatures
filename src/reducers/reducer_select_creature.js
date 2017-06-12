import { SELECT_CREATURE } from '../actions';

export default function(state = {} , action) {
  switch (action.type) {
    case SELECT_CREATURE:
      console.log(action.payload);
      return action.payload.data;
    default:
      return state;
  }
}
