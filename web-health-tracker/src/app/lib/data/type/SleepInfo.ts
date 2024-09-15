import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const SleepFormSchema = z.object({
  date: z.string(),
  hour: z.number(),
});

export type SleepForm = z.infer<typeof SleepFormSchema>;
export const isSleepForm = isZodSchemaType(SleepFormSchema);
