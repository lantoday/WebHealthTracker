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

export type ImageFile = {
  name: string;
  url: string;
};

export type HistoryEntry = {
  date: string;
  title: string;
  details: string;
  files: ImageFile[];
};

export type HistoryArray = HistoryEntry[];

export type SleepEntry = {
  date: string;
  hour: number;
};

export type SleepArray = SleepEntry[];

export enum ChartType {
  Line = "line",
  Bar = "bar",
}

export enum DisplayView {
  DAILY = 30,
  WEEKLY = 365,
  MONTHLY = 365,
  ALL = 0,
}

export enum DisplayMode {
  Daily = "daily",
  Weekly = "weekly",
  Monthly = "monthly",
}
