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

export type RunningEntry = {
  date: string;
  kilometer: number;
};

export type RunningArray = RunningEntry[];

export type OthersEntry = {
  date: string;
  kilocalories: number;
  kilometer: number;
};

export type OthersArray = OthersEntry[];

export enum ChartType {
  Line = "line",
  Bar = "bar",
}

export enum DisplayView {
  DAILY = 30,
  WEEKLY = 365,
  MONTHLY = 365,
}

export enum DisplayMode {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}
