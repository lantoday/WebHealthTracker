"use client";

import { z } from "zod";
import { saveHistoryToDb } from "@/app/lib/dbactions/history";
import { HistoryEntry } from "@/app/lib/utils/definitions";
// import { redirect } from "next/navigation";

const HistoryFormSchema = z.object({
  date: z.string(),
  title: z.string(),
  details: z.string(),
  files: z.array(z.string()).optional(), // Update schema to include file
});

export async function addHistory(formData: any) {
  // Validate the form data
  const validatedFields = HistoryFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    // Return validation errors
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check the form data.",
    };
  }

  // Prepare data for insertion into the database
  const { date, title, details, files = [] } = validatedFields.data;

  const historyData: HistoryEntry = {
    date,
    title,
    details,
    files,
  };

  // Save to database and handle the result
  try {
    const message = await saveHistoryToDb(historyData);
    // redirect("/exercise"); //cause save error don't know why yet
    return { errors: {}, message };
  } catch (error) {
    // Handle database errors
    return {
      errors: {},
      message: "Failed to save history data. Please try again later.",
    };
  }
}
