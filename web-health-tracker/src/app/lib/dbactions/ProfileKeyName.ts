// import type { EnumTypeOf } from "utils/EnumTypeOf";

/**
 * The file copy from https://github.com/Cipscis/orange-twist
 * The names of object stores within Orange Twist's IndexedDB database.
 */
export const ProfileKeyName = {
  PROFILE: "profile",
  STEPS: "steps",
} as const;
export type ProfileKeyName = EnumTypeOf<typeof ProfileKeyName>;

export type EnumTypeOf<E> = E[keyof E];
