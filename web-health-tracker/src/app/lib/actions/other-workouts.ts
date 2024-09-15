"use client";

import { saveOtherWorkoutDataToDb } from "@/app/lib/dbactions/other-workouts";
import { OthersEntry } from "@/app/lib/utils/definitions";
import { OtherWorkoutFormSchema } from "@/app/lib/data/type/otherWorkoutInfo";
// import { redirect } from "next/navigation";

export async function addOtherWorkoutData(formData: any) {
  // Validate the form data
  const validatedFields = OtherWorkoutFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    // Return validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { date, kilocalories, kilometer } = validatedFields.data;
  const otherWorkoutData: OthersEntry = { date, kilocalories, kilometer };

  // Save to database and handle the result
  try {
    const message = await saveOtherWorkoutDataToDb(otherWorkoutData);
    // redirect("/exercise"); //cause save error don't know why yet
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save workout data. Please try again later.",
    };
  }
}
