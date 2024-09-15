"use client";

import { saveStepsToDb } from "@/app/lib/dbactions/steps";
import { StepEntry } from "@/app/lib/utils/definitions";
import { StepsFormSchema } from "@/app/lib/data/type/StepsInfo";
// import { redirect } from "next/navigation";

export async function addSteps(formData: any) {
  // Validate the form data
  const validatedFields = StepsFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    // Return validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { date, steps } = validatedFields.data;
  const stepsData: StepEntry = { date, steps };

  // Save to database and handle the result
  try {
    const message = await saveStepsToDb(stepsData);
    // redirect("/exercise"); //cause save error don't know why yet
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save steps. Please try again later.",
    };
  }
}
