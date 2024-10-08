import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { OthersArray, OthersEntry } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

export async function saveOtherWorkoutDataToDb(
  othersEntry: OthersEntry
): Promise<string> {
  const existingOtherWorkoutData = await getOtherWorkoutData();

  let updatedOtherWorkoutData: OthersArray = [];

  if (existingOtherWorkoutData) {
    const filteredOtherWorkoutData = existingOtherWorkoutData.filter(
      (otherWorkoutData: OthersEntry) =>
        otherWorkoutData.date !== othersEntry.date
    );

    updatedOtherWorkoutData = [...filteredOtherWorkoutData, othersEntry];
  } else {
    updatedOtherWorkoutData = [othersEntry];
  }

  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: OthersArray, arg1: string) => any }) =>
      store.put(updatedOtherWorkoutData, ObjectKeyName.OTHERS)
  );

  return "Workout data saved successfully!";
}

export async function getOtherWorkoutData(): Promise<OthersArray | null> {
  const otherWorkoutData = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store) => store.get(ObjectKeyName.OTHERS)
  );

  if (otherWorkoutData instanceof Array) {
    return otherWorkoutData;
  }
  return null;
}

export async function importOtherWorkoutDataToDb(
  othersArray: OthersArray
): Promise<string> {
  if (!Array.isArray(othersArray) || othersArray.length === 0) {
    return "Invalid workout data!";
  }

  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: OthersArray, arg1: string) => any }) =>
      store.put(othersArray, ObjectKeyName.OTHERS)
  );

  return "Workout data saved successfully!";
}
