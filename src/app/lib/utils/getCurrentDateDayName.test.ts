import { formatDate } from "./formatDate";
import { getCurrentDateDayName } from "./getCurrentDateDayName";
import { describe, expect, it } from "@jest/globals";

describe("getCurrentDateDayName", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test("returns the correct date", () => {
    const today = new Date();
    let expectedDate = formatDate(today);
    expect(getCurrentDateDayName()).toEqual(expectedDate);
  });
});
