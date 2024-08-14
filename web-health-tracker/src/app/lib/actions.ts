"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProfileFormSchema = z.object({
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

// Infer the TypeScript type from the schema
// export type Profile = z.infer<typeof ProfileFormSchema>;

// Define the state type for managing form state
// export type Profile = {
//   errors?: {
//     firstName?: string[];
//     lastName?: string[];
//     gender?: string[];
//     age?: string[];
//     height?: string[];
//     weight?: string[];
//   }; // Holds validation errors for each field
//   message?: string | null; // Optional message for additional status
// };

export async function addProfile(prevState: any, formData: FormData) {
  const validatedFields = ProfileFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    age: formData.get("age"),
    height: formData.get("height"),
    weight: formData.get("weight"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { firstName, lastName, gender, age, height, weight } =
    validatedFields.data;

  // insert data into indexedDB
  console.log("inserting data into indexedDB");
  console.log({ firstName, lastName, gender, age, height, weight });

  revalidatePath("/management");
  redirect("/management");
}
