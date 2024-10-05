import { sortDataByDates } from "./sortDataByDates";
import { DisplayView } from "./definitions";

describe("sortDataByDates", () => {
  const mockData = [
    { date: "2024-09-21" },
    { date: "2024-09-19" },
    { date: "2024-09-18" },
    { date: "2024-09-16" },
    { date: "2024-09-17" },
    { date: "2024-09-14" },
    { date: "2024-09-12" },
    { date: "2024-09-11" },
    { date: "2024-09-09" },
    { date: "2024-09-08" },
    { date: "2024-09-05" },
    { date: "2024-09-04" },
    { date: "2024-09-02" },
    { date: "2024-08-30" },
    { date: "2024-08-27" },
    { date: "2024-07-31" },
    { date: "2024-07-10" },
    { date: "2024-09-23" },
    { date: "2024-09-24" },
    { date: "2024-09-25" },
    { date: "2024-06-27" },
    { date: "2024-07-17" },
    { date: "2024-07-18" },
  ];

  it("should sort data by dates when range is ALL", async () => {
    const result = await sortDataByDates(mockData, DisplayView.ALL);
    expect(result).toEqual([
      { date: "2024-09-25" },
      { date: "2024-09-24" },
      { date: "2024-09-23" },
      { date: "2024-09-21" },
      { date: "2024-09-19" },
      { date: "2024-09-18" },
      { date: "2024-09-17" },
      { date: "2024-09-16" },
      { date: "2024-09-14" },
      { date: "2024-09-12" },
      { date: "2024-09-11" },
      { date: "2024-09-09" },
      { date: "2024-09-08" },
      { date: "2024-09-05" },
      { date: "2024-09-04" },
      { date: "2024-09-02" },
      { date: "2024-08-30" },
      { date: "2024-08-27" },
      { date: "2024-07-31" },
      { date: "2024-07-18" },
      { date: "2024-07-17" },
      { date: "2024-07-10" },
      { date: "2024-06-27" },
    ]);
  });

  it("should sort data by dates, last 30 days, daily", async () => {
    const result = await sortDataByDates(mockData, DisplayView.DAILY);
    expect(result).toEqual([
      { date: "2024-09-25" },
      { date: "2024-09-24" },
      { date: "2024-09-23" },
      { date: "2024-09-21" },
      { date: "2024-09-19" },
      { date: "2024-09-18" },
      { date: "2024-09-17" },
      { date: "2024-09-16" },
      { date: "2024-09-14" },
      { date: "2024-09-12" },
      { date: "2024-09-11" },
      { date: "2024-09-09" },
      { date: "2024-09-08" },
    ]);
  });
});
