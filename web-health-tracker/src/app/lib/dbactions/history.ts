import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { HistoryArray, HistoryEntry } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

// Function to save history to the database
export async function saveHistoryToDb(
  historyEntry: HistoryEntry
): Promise<string> {
  // Fetch existing history from the database
  const existingHistory = await getHistory();

  // Initialize an array to hold the updated history
  let updatedHistory: HistoryArray = [];

  updatedHistory = [...(existingHistory ?? []), historyEntry];

  // Save the updated history back to the database
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: HistoryArray, arg1: string) => any }) =>
      store.put(updatedHistory, ObjectKeyName.HISTORY)
  );

  return "History data saved successfully!";
}

export async function getHistory(): Promise<HistoryArray | null> {
  const history = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store) => store.get(ObjectKeyName.HISTORY)
  );

  if (history instanceof Array) {
    return history;
  }
  return null;
}

export async function importHistoryToDb(
  historyArray: HistoryArray
): Promise<string> {
  // check if historyArray is an array and not empty
  if (!Array.isArray(historyArray) || historyArray.length === 0) {
    return "Invalid history data!";
  }

  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: HistoryArray, arg1: string) => any }) =>
      store.put(historyArray, ObjectKeyName.HISTORY)
  );

  return "History data saved successfully!";
}
