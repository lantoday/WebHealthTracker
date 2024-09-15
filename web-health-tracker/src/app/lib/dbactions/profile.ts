import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { Profile } from "@/app/lib/utils/definitions";
import { ObjectKeyName } from "./ObjectKeyName";

export async function saveProfileToDb(profile: Profile): Promise<string> {
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.DATA,
    (store: { put: (arg0: Profile, arg1: string) => any }) =>
      store.put(profile, ObjectKeyName.PROFILE)
  );

  return "Profile saved successfully!";
}

export async function getProfile(): Promise<Profile | null> {
  console.log("getProfile");
  const profile = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.DATA,
    (store: { get: (arg0: string) => any }) => store.get(ObjectKeyName.PROFILE)
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
    (obj.gender === "male" ||
      obj.gender === "female" ||
      obj.gender === "prefer not to say") &&
    typeof obj.age === "number" &&
    typeof obj.height === "number" &&
    typeof obj.weight === "number"
  );
}
