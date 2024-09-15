"use client";

import { saveRunningDataToDb } from "@/app/lib/dbactions/running";
import { RunningEntry } from "@/app/lib/utils/definitions";
import { RunningFormSchema } from "@/app/lib/data/type/RunningInfo";
// import { redirect } from "next/navigation";

export async function addRunningData(formData: any) {
  // Validate the form data
  const validatedFields = RunningFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    // Return validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { date, kilometer } = validatedFields.data;
  const runningData: RunningEntry = { date, kilometer };

  // Save to database and handle the result
  try {
    const message = await saveRunningDataToDb(runningData);
    // redirect("/exercise"); //cause save error don't know why yet
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save running data. Please try again later.",
    };
  }
}
