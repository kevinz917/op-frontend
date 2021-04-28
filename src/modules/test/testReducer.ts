import { produce } from 'immer';
import { TEST_ACTIONS } from './testActionCretor';

// test reducer for demo purposes
const testReducer = produce((state, action) => {
  switch (action.type) {
    case TEST_ACTIONS.SET_LOADING_TRUE:
      state.loading = true;
      break;
    case TEST_ACTIONS.SET_LOADING_FALSE:
      state.loading = false;
      break;
    default:
      break;
  }
});

export default testReducer;
