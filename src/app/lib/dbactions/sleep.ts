import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { SleepArray, SleepEntry } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

// Function to save sleeps to the database
export async function saveSleepDataToDb(
  sleepEntry: SleepEntry
): Promise<string> {
  // Fetch existing sleeps from the database
  const existingSleepData = await getSleepData();

  // Initialize an array to hold the updated sleeps
  let updatedSleepData: SleepArray = [];

  if (existingSleepData) {
    // Filter out any sleeps with the same date as the new sleep
    const filteredSleepData = existingSleepData.filter(
      (sleep: SleepEntry) => sleep.date !== sleepEntry.date
    );

    // Add the new sleep to the filtered list
    updatedSleepData = [...filteredSleepData, sleepEntry];
  } else {
    // If no existing sleeps, start a new array with the current sleep
    updatedSleepData = [sleepEntry];
  }

  // Save the updated sleeps back to the database
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: SleepArray, arg1: string) => any }) =>
      store.put(updatedSleepData, ObjectKeyName.SLEEP)
  );

  return "Sleep data saved successfully!";
}

export async function getSleepData(): Promise<SleepArray | null> {
  const sleepData = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store) => store.get(ObjectKeyName.SLEEP)
  );

  if (sleepData instanceof Array) {
    return sleepData;
  }
  return null;
}

export async function importSleepDataToDb(
  sleepArray: SleepArray
): Promise<string> {
  if (!Array.isArray(sleepArray) || sleepArray.length === 0) {
    return "Invalid sleep data!";
  }

  // Save the updated sleeps back to the database
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: SleepArray, arg1: string) => any }) =>
      store.put(sleepArray, ObjectKeyName.SLEEP)
  );

  return "Sleep data saved successfully!";
}
