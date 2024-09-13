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
    ObjectStoreName.HISTORY,
    (store: { put: (arg0: HistoryArray, arg1: string) => any }) =>
      store.put(updatedHistory, ObjectKeyName.HISTORY)
  );

  return "History data saved successfully!";
}

export async function getHistory(): Promise<HistoryArray | null> {
  const history = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.HISTORY,
    (store) => store.get(ObjectKeyName.HISTORY)
  );

  if (history instanceof Array) {
    return history;
  }
  return null;
}
