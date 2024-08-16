import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { Profile } from "@/app/lib/definitions";

export const PROFILE_KEY = "profile";

export async function saveProfile(profile: Profile): Promise<string> {
  await doDatabaseTransaction("readwrite", ObjectStoreName.PROFILE, (store) =>
    store.put(profile, PROFILE_KEY)
  );

  console.log({ profile });
  return "Profile saved successfully!";
}

export async function getProfile(): Promise<Profile | null> {
  const profile = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.PROFILE,
    (store) => store.get(PROFILE_KEY)
  );

  if (isProfile(profile)) {
    return profile;
  }
  return null;
}

// Function to check if an object is a valid Profile
function isProfile(obj: any): obj is Profile {
  return (
    obj &&
    typeof obj.firstName === "string" &&
    typeof obj.lastName === "string" &&
    typeof obj.gender === "string" &&
    typeof obj.age === "number" &&
    typeof obj.height === "number" &&
    typeof obj.weight === "number"
  );
}
