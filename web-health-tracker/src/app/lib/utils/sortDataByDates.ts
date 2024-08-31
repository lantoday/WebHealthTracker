import { DisplayView, StepArray } from "./definitions";

export async function sortDataByDates(
  rawData: StepArray,
  dateRange: DisplayView.DAILY | DisplayView.WEEKLY | DisplayView.MONTHLY
): Promise<StepArray> {
  return new Promise((resolve) => {
    const startDate = new Date();
    startDate.setDate(new Date().getDate() - dateRange);

    const sortedData = rawData
      ? rawData
          .slice()
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .filter((entry) => new Date(entry.date) >= startDate)
      : [];

    resolve(sortedData);
  });
}
