import { ObjectStoreName, doDatabaseTransaction } from "../indexedDB";
import { Profile } from "@/app/lib/definitions";

export async function saveProfile(profile: Profile): Promise<string> {
  await doDatabaseTransaction("readwrite", ObjectStoreName.PROFILE, (store) =>
    store.put(profile, "profile")
  );

  console.log({ profile });
  return "Profile saved successfully!";
}
