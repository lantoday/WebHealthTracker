import { formatDate } from "./date";
import { describe, expect, it } from "@jest/globals";

describe("formatDate", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("returns the current date during the day", () => {
    expect(formatDate(new Date(2023, 10, 28))).toEqual("2023-10-28");
  });
});
