import { formatDate } from "./formatDate";
import { describe, expect, it } from "@jest/globals";

describe("formatDate", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("returns the correct date", () => {
    expect(formatDate(new Date(2023, 10, 28))).toEqual("2023-10-28");
  });

  test("returns date in January", () => {
    expect(formatDate(new Date(2023, 1, 28))).toEqual("2023-01-28");
  });
});
