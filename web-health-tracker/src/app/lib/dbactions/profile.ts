import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { Profile } from "@/app/lib/definitions";
import { ProfileKeyName } from "./ProfileKeyName";

export async function saveProfileToDb(profile: Profile): Promise<string> {
  await doDatabaseTransaction(
    "readwrite",
    ObjectStoreName.PROFILE,
    (store: { put: (arg0: Profile, arg1: string) => any }) =>
      store.put(profile, ProfileKeyName.STEPS)
  );

  console.log({ profile });
  return "Profile saved successfully!";
}

export async function getProfile(): Promise<Profile | null> {
  console.log("getProfile");
  const profile = await doDatabaseTransaction(
    "readonly",
    ObjectStoreName.PROFILE,
    (store: { get: (arg0: string) => any }) => store.get(ProfileKeyName.STEPS)
  );

  console.log({ profile });
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
