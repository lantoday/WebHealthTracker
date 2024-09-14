import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { StepArray, StepEntry } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

// Function to save steps to the database
export async function saveStepsToDb(stepEntry: StepEntry): Promise<string> {
  // Fetch existing steps from the database
  const existingSteps = await getSteps();

  // Initialize an array to hold the updated steps
  let updatedSteps: StepArray = [];

  if (existingSteps) {
    // Filter out any steps with the same date as the new step
    const filteredSteps = existingSteps.filter(
      (step: StepEntry) => step.date !== stepEntry.date
    );

    // Add the new step to the filtered list
    updatedSteps = [...filteredSteps, stepEntry];
  } else {
    // If no existing steps, start a new array with the current step
    updatedSteps = [stepEntry];
  }

  // Save the updated steps back to the database
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: StepArray, arg1: string) => any }) =>
      store.put(updatedSteps, ObjectKeyName.STEPS)
  );

  return "Steps saved successfully!";
}

export async function getSteps(): Promise<StepArray | null> {
  const steps = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store) => store.get(ObjectKeyName.STEPS)
  );

  if (steps instanceof Array) {
    return steps;
  }
  return null;
}
