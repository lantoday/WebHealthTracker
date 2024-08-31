export type Profile = {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  height: number;
  weight: number;
};

export type StepEntry = {
  date: string;
  steps: number;
};

export type StepArray = StepEntry[];

export enum ChartType {
  Line = "line",
  Bar = "bar",
}
