import { isEmpty } from 'lodash';
import { valueLabel } from '../../common/types/baseTypes';

export const formatValueLabelPair = (values: string[]): valueLabel[] => {
  return values.map((value: string) => ({ value: value, label: value }));
};

export const newItemSaveValidator = (newItemState: any): boolean => {
  return (
    !isEmpty(newItemState.name) &&
    !isEmpty(newItemState.notes) &&
    !isEmpty(newItemState.category) &&
    !isEmpty(newItemState.frequency)
  );
};
