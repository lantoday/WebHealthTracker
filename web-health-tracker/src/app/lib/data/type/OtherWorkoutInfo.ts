import { z } from "zod";
import { isZodSchemaType } from "./isZodSchemaType";

export const OtherWorkoutFormSchema = z.object({
  date: z.string(),
  kilocalories: z.number(),
  kilometer: z.number(),
});

export type OtherWorkoutForm = z.infer<typeof OtherWorkoutFormSchema>;
export const isOtherWorkoutForm = isZodSchemaType(OtherWorkoutFormSchema);
