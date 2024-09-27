import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const RunningFormSchema = z.object({
  date: z.string(),
  kilometer: z.number(),
});

export type RunningForm = z.infer<typeof RunningFormSchema>;
export const isRunningForm = isZodSchemaType(RunningFormSchema);
