import { describe, expect, it } from "vitest";

import { allocationScheduleBounds, mergeAllocationPeriod } from "./allocation-schedule";

describe("allocation schedule", () => {
  it("preserves sequential periods with different daily hours", () => {
    let schedule = mergeAllocationPeriod({}, "2026-07-01", "2026-07-10", 3);
    schedule = mergeAllocationPeriod(schedule, "2026-07-11", "2026-07-15", 4);
    schedule = mergeAllocationPeriod(schedule, "2026-07-16", "2026-07-20", 6);

    expect(allocationScheduleBounds(schedule)).toEqual({
      start: "2026-07-01",
      end: "2026-07-20",
    });
    expect(schedule["2026-07-01"]).toBe(3);
    expect(schedule["2026-07-10"]).toBe(3);
    expect(schedule["2026-07-11"]).toBe(4);
    expect(schedule["2026-07-15"]).toBe(4);
    expect(schedule["2026-07-16"]).toBe(6);
    expect(schedule["2026-07-20"]).toBe(6);
    expect(Object.keys(schedule)).toHaveLength(20);
  });

  it("edits only the selected dates without deleting the other periods", () => {
    let schedule = mergeAllocationPeriod({}, "2026-07-01", "2026-07-10", 3);
    schedule = mergeAllocationPeriod(schedule, "2026-07-11", "2026-07-15", 4);
    schedule = mergeAllocationPeriod(schedule, "2026-07-16", "2026-07-20", 6);
    schedule = mergeAllocationPeriod(schedule, "2026-07-12", "2026-07-13", 5);

    expect(schedule["2026-07-10"]).toBe(3);
    expect(schedule["2026-07-11"]).toBe(4);
    expect(schedule["2026-07-12"]).toBe(5);
    expect(schedule["2026-07-13"]).toBe(5);
    expect(schedule["2026-07-14"]).toBe(4);
    expect(schedule["2026-07-16"]).toBe(6);
    expect(Object.keys(schedule)).toHaveLength(20);
  });
});
