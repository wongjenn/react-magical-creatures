import { combineReducers } from 'redux';
import CreaturesReducer from './reducer_creatures';
import SelectCreatureReducer from './reducer_select_creature';

const rootReducer = combineReducers({
  creatures: CreaturesReducer,
  creature: SelectCreatureReducer
});

export default rootReducer;
