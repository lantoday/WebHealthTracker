import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const StepsFormSchema = z.object({
  date: z.string(),
  steps: z.number(),
});

export type StepsForm = z.infer<typeof StepsFormSchema>;
export const isStepsForm = isZodSchemaType(StepsFormSchema);
