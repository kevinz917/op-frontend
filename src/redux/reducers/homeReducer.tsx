import produce from 'immer';
import { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';

const homeDefaultState = {
  items: [],
};

const homeReducer = produce((state, action: any) => {
  switch (action.type) {
    case CREATE_ITEM_ACTIONS.GET_ALL_ITEMS_SUCCESS:
      state.items = action.payload.items;
      break;
    default:
      break;
  }
}, homeDefaultState);

export { homeReducer };
