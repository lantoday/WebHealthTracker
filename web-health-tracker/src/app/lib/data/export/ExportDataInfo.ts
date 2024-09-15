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
  history: z.array(z.tuple([z.string(), HistoryFormSchema])),
  others: z.array(z.tuple([z.string(), OtherWorkoutFormSchema])),
  running: z.array(z.tuple([z.string(), RunningFormSchema])),
  sleep: z.array(z.tuple([z.string(), SleepFormSchema])),
  steps: z.array(z.tuple([z.string(), StepsFormSchema])),
  profile: z.array(z.tuple([z.string(), ProfileFormSchema])),
});

export type ExportDataInfo = z.infer<typeof exportDataSchema>;
export const isExportDataInfo = isZodSchemaType(exportDataSchema);
