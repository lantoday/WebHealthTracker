import { DisplayView } from "./definitions";

export async function sortDataByDates<T extends { date: string }>(
  rawData: T[],
  dateRange: DisplayView.DAILY | DisplayView.WEEKLY | DisplayView.MONTHLY
): Promise<T[]> {
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
