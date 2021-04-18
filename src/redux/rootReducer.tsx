import { combineReducers } from 'redux';
import { createItemReducer } from './reducers/createitemReducer';
import { homeReducer } from './reducers/homeReducer';

const MasterReducer = combineReducers({
  newItem: createItemReducer,
  home: homeReducer,
});

export default MasterReducer;
