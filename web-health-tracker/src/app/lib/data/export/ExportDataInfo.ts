import { z } from "zod";

import { isZodSchemaType } from "../type/isZodSchemaType";

import { HistoryFormSchema } from "../type/historyInfo";
import { OtherWorkoutFormSchema } from "../type/otherWorkoutInfo";
import { RunningFormSchema } from "../type/runningInfo";
import { ProfileFormSchema } from "../type/profileInfo";
import { StepsFormSchema } from "../type/stepsInfo";
import { SleepFormSchema } from "../type/sleepInfo";
import { exportDataLikeSchema } from "./ExportDataLike";
/**
 * Strict export data format used when constructing export data.
 */
const exportDataSchema = exportDataLikeSchema.extend({
  history: z.array(HistoryFormSchema),
  others: z.array(OtherWorkoutFormSchema),
  running: z.array(RunningFormSchema),
  sleep: z.array(SleepFormSchema),
  steps: z.array(StepsFormSchema),
  profile: ProfileFormSchema,
});

export type ExportDataInfo = z.infer<typeof exportDataSchema>;
export const isExportDataInfo = isZodSchemaType(exportDataSchema);
