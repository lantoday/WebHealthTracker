"use client";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Profile } from "@/app/lib/utils/definitions";
import { saveProfileToDb } from "../dbactions/profile";
import { ProfileFormSchema } from "@/app/lib/data/type/profileInfo";

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
