export interface TimeByProject {
  project: string;
  amount: number;
}

export interface TimeByDate {
  day: Date;
  amount: number;
}

export interface Time {
  date: Date;
  project: string;
  amount: number;
}
