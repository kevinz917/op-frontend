import { combineReducers } from 'redux';
import { createItemReducer } from './reducers/createitemReducer';
import { homeReducer } from './reducers/homeReducer';
import { globalReducer } from './reducers/globalReducer';

const MasterReducer = combineReducers({
  global: globalReducer,
  newItem: createItemReducer,
  home: homeReducer,
});

export default MasterReducer;
