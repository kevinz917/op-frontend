import { createSelector } from 'reselect';

export const newItemSelector = (state: any) => state.newItem;

export const itemsSelector = (state: any) => state.home.items;
