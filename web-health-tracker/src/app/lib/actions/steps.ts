"use client";

import { z } from "zod";
import { saveStepsToDb } from "@/app/lib/dbactions/steps";

const StepsFormSchema = z.object({
  date: z.string(),
  steps: z.number(),
});

export async function saveSteps(formData: any) {
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
  const stepsData = { date, steps };

  // Save to database and handle the result
  try {
    const message = await saveStepsToDb(stepsData);
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save steps. Please try again later.",
    };
  }
}
