"use client";

import { saveSleepDataToDb } from "@/app/lib/dbactions/sleep";
import { SleepEntry } from "@/app/lib/utils/definitions";
import { SleepFormSchema } from "@/app/lib/data/type/sleepInfo";
// import { redirect } from "next/navigation";

export async function addSleepData(formData: any) {
  // Validate the form data
  const validatedFields = SleepFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    // Return validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { date, hour } = validatedFields.data;
  const sleepData: SleepEntry = { date, hour };

  // Save to database and handle the result
  try {
    const message = await saveSleepDataToDb(sleepData);
    // redirect("/exercise"); //cause save error don't know why yet
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save sleep data. Please try again later.",
    };
  }
}
