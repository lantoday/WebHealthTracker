"use client";

import { z } from "zod";
// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Profile } from "@/app/lib/definitions";
import { saveProfileToDb } from "../dbactions/profile";

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

export async function addProfile(prevState: any, formData: FormData) {
  const validatedFields = ProfileFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    gender: formData.get("gender"),
    age: formData.get("age"),
    height: formData.get("height"),
    weight: formData.get("weight"),
  });

  //TODO need to make sure the error message is shown in the UI
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { firstName, lastName, gender, age, height, weight } =
    validatedFields.data;

  const profile: Profile = {
    firstName,
    lastName,
    gender,
    age,
    height,
    weight,
  };

  //TODO need to add an alert to show the message
  var message = saveProfileToDb(profile);

  //TODO revalidatePath() need to have "use server"; at the top, but it results in an error in indexeddb.open()
  // revalidatePath("/management");
  redirect("/management");
}
