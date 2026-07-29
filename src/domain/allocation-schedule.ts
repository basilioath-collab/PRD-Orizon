export type AllocationDailySchedule = Record<string, number>;

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function nextIsoDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + 1);
  return date.toISOString().slice(0, 10);
}

export function mergeAllocationPeriod(
  current: AllocationDailySchedule,
  start: string,
  end: string,
  hours: number,
): AllocationDailySchedule {
  const next = { ...(current ?? {}) };
  if (!ISO_DATE.test(start) || !ISO_DATE.test(end) || end < start || !Number.isFinite(hours) || hours < 0) {
    return next;
  }

  let cursor = start;
  let guard = 0;
  while (cursor <= end && guard < 8000) {
    next[cursor] = hours;
    cursor = nextIsoDate(cursor);
    guard += 1;
  }
  return next;
}

export function allocationScheduleBounds(
  schedule: AllocationDailySchedule,
): { start: string; end: string } | null {
  const dates = Object.keys(schedule ?? {}).filter((date) => ISO_DATE.test(date)).sort();
  return dates.length ? { start: dates[0], end: dates[dates.length - 1] } : null;
}
