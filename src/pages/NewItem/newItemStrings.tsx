import { valueLabel } from "../../common/types/baseTypes";

export const categoryOptions: string[] = ["People", "Idea", "Task"];

export const frequencyOptions: valueLabel[] = [
  { value: "e-1", label: "Every day" },
  { value: "e-7", label: "Every week" },
  { value: "e-30", label: "Every month" },
  { value: "o-1", label: "In a day" },
  { value: "o-2", label: "In 2 days" },
  { value: "o-3", label: "In 3 days" },
  { value: "o-4", label: "In 4 days" },
  { value: "o-5", label: "In 5 days" },
];
