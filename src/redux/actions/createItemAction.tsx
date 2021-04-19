import { Action } from '../../common/types/Action';
import { valueLabel } from '../../common/types/baseTypes';
import actionCreator from '../actionCreator';

export const CREATE_ITEM_ACTIONS = {
  // fields
  NAME_FIELD_CHANGED: 'NAME_FIELD_CHANGED',
  NOTES_FIELD_CHANGED: 'NOTES_FIELD_CHANGED',
  CATEGORY_FIELD_CHANGED: 'CATEGORY_FIELD_CHANGED',
  FREQUENCY_FIELD_CHANGED: 'FREQUENCY_FIELD_CHANGED',
  CLEAR_NEW_ITEM_FIELDS: 'CLEAR_NEW_ITEM_FIELDS',
  SAVE_NEW_ITEM: 'SAVE_NEW_ITEM',

  SAVE_ITEM: 'SAVE_ITEM',
  SAVE_ITEM_SUCCESS: 'SAVE_ITEM_SUCCESS',
  SAVE_ITEM_FAIL: 'SAVE_ITEM_FAIL',

  GET_ALL_ITEMS: 'GET_ALL_ITEMS',
  GET_ALL_ITEMS_SUCCESS: 'GET_ALL_ITEMS_SUCCESS',

  POPULATE_ITEM_FIELDS: 'POPULATE_ITEM_FIELDS',
};

export default {
  // fields
  nameFieldChanged(name: string): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.NAME_FIELD_CHANGED, name);
  },
  notesFieldChanged(notes: string): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.NOTES_FIELD_CHANGED, notes);
  },
  categoryFieldChanged(category: valueLabel): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.CATEGORY_FIELD_CHANGED, category);
  },
  frequencyFieldChanged(frequency: valueLabel): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.FREQUENCY_FIELD_CHANGED, frequency);
  },
  clearNewItemFields(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.CLEAR_NEW_ITEM_FIELDS);
  },

  // save item
  saveNewItem(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.SAVE_ITEM);
  },
  saveNewItemSuccess(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.SAVE_ITEM_SUCCESS);
  },

  // get all items
  getAllItems(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.GET_ALL_ITEMS);
  },
  getAllItemsSuccess(items: any): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.GET_ALL_ITEMS_SUCCESS, { items });
  },

  // populate fields
  populateItemFields(item: any): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.POPULATE_ITEM_FIELDS, { item });
  },

  // clear field
  clearItemFields(): Action {
    return actionCreator(CREATE_ITEM_ACTIONS.CLEAR_NEW_ITEM_FIELDS);
  },
};
