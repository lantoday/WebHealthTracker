// import type { EnumTypeOf } from "utils/EnumTypeOf";

/**
 * The file copy from https://github.com/Cipscis/orange-twist
 * The names of object stores within Orange Twist's IndexedDB database.
 */
export const ObjectKeyName = {
  PROFILE: "profile",
  STEPS: "steps",
  RUNNING: "running",
  OTHERS: "others",
  HISTORY: "history",
  SLEEP: "sleep",
} as const;
export type ObjectKeyName = EnumTypeOf<typeof ObjectKeyName>;

export type EnumTypeOf<E> = E[keyof E];
