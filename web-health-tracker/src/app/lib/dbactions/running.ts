import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { RunningArray, RunningEntry } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

export async function saveRunningDataToDb(
  runningEntry: RunningEntry
): Promise<string> {
  const existingRunningData = await getRunningData();

  let updatedRunningData: RunningArray = [];

  if (existingRunningData) {
    const filteredRunningData = existingRunningData.filter(
      (runningData: RunningEntry) => runningData.date !== runningEntry.date
    );

    updatedRunningData = [...filteredRunningData, runningEntry];
  } else {
    updatedRunningData = [runningEntry];
  }

  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: RunningArray, arg1: string) => any }) =>
      store.put(updatedRunningData, ObjectKeyName.RUNNING)
  );

  return "Running data saved successfully!";
}

export async function getRunningData(): Promise<RunningArray | null> {
  const runningData = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store) => store.get(ObjectKeyName.RUNNING)
  );

  if (runningData instanceof Array) {
    return runningData;
  }
  return null;
}
