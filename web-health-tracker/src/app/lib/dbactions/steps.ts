import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { Steps } from "@/app/lib/definitions";
import { ProfileKeyName } from "./ProfileKeyName";

// Function to save steps to the database
export async function saveStepsToDb(steps: Steps): Promise<string> {
  // Fetch existing steps from the database
  const existingSteps = await getSteps();

  // Initialize an array to hold the updated steps
  let updatedSteps: Steps[] = [];

  if (existingSteps) {
    // Filter out any steps with the same date as the new step
    const filteredSteps = existingSteps.filter(
      (step) => step.date !== steps.date
    );

    // Add the new step to the filtered list
    updatedSteps = [...filteredSteps, steps];
  } else {
    // If no existing steps, start a new array with the current step
    updatedSteps = [steps];
  }

  // Save the updated steps back to the database
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.EXERCISE,
    (store: { put: (arg0: Steps[], arg1: string) => any }) =>
      store.put(updatedSteps, ProfileKeyName.STEPS)
  );

  return "Steps saved successfully!";
}

export async function getSteps(): Promise<Steps | null> {
  console.log("get steps");
  const steps = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.EXERCISE,
    (store: { get: (arg0: string) => any }) => store.get(ProfileKeyName.STEPS)
  );

  console.log({ steps });
  if (steps && steps.length > 0) {
    return steps;
  }
  return null;
}
