import produce from 'immer';
import { Action } from '../../common/types/Action';
import { CREATE_ITEM_ACTIONS } from '../actions/createItemAction';

const createItemPageDefaultState = {
  name: '',
  notes: '',
  category: null,
  frequency: null,
};

const createItemReducer = produce((state, action: any) => {
  switch (action.type) {
    case CREATE_ITEM_ACTIONS.NAME_FIELD_CHANGED:
      state.name = action.payload;
      break;
    case CREATE_ITEM_ACTIONS.NOTES_FIELD_CHANGED:
      state.notes = action.payload;
      break;
    case CREATE_ITEM_ACTIONS.CATEGORY_FIELD_CHANGED:
      state.category = action.payload.value;
      break;
    case CREATE_ITEM_ACTIONS.FREQUENCY_FIELD_CHANGED:
      state.frequency = action.payload.value;
      break;
    case CREATE_ITEM_ACTIONS.CLEAR_NEW_ITEM_FIELDS:
      state = createItemPageDefaultState;
      break;
    default:
      break;
  }
}, createItemPageDefaultState);

export { createItemReducer };
