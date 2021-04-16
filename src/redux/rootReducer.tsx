import { combineReducers } from 'redux';
import { createItemReducer } from './reducers/createitemReducer';

const MasterReducer = combineReducers({
  newItem: createItemReducer,
});

export default MasterReducer;
