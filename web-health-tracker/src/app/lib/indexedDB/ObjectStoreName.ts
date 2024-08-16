// import type { EnumTypeOf } from "utils/EnumTypeOf";

/**
 * The file copy from https://github.com/Cipscis/orange-twist
 * The names of object stores within Orange Twist's IndexedDB database.
 */
export const ObjectStoreName = {
  PROFILE: "profile",
  EXERCISE: "exercise",
} as const;
export type ObjectStoreName = EnumTypeOf<typeof ObjectStoreName>;

export type EnumTypeOf<E> = E[keyof E];
