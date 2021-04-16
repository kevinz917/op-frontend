import { valueLabel } from '../../common/types/baseTypes';

export const formatValueLabelPair = (values: string[]): valueLabel[] => {
  return values.map((value: string) => ({ value: value, label: value }));
};
