import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const ProfileFormSchema = z.object({
  firstName: z.string({
    invalid_type_error: "Please input your first name.",
  }),
  lastName: z.string({
    invalid_type_error: "Please input your last name.",
  }),
  gender: z.enum(["male", "female", "prefer not to say"], {
    invalid_type_error: "Please select a gender option.",
  }),
  age: z.coerce
    .number()
    .int()
    .min(0, { message: "Age must be at least 0." })
    .max(100, { message: "Age must be no more than 100." }),
  height: z.coerce
    .number()
    .gt(0, { message: "Height must be greater than 0." }),

  weight: z.coerce
    .number()
    .min(1, { message: "Weight must be at least 1." })
    .max(300, { message: "Weight must be no more than 300." }),
});

export type ProfileForm = z.infer<typeof ProfileFormSchema>;
export const isProfileForm = isZodSchemaType(ProfileFormSchema);
