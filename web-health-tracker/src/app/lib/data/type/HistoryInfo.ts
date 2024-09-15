import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const HistoryFormSchema = z.object({
  title: z.string(),
  date: z.string(),
  details: z.string(),
  files: z
    .array(
      z.object({
        name: z.string(),
        url: z.string(),
      })
    )
    .optional(),
});

export type HistoryForm = z.infer<typeof HistoryFormSchema>;
export const isHistoryForm = isZodSchemaType(HistoryFormSchema);
