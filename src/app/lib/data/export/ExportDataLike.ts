import { z } from "zod";

import { isZodSchemaType } from "../type/isZodSchemaType";

/**
 * Unstrict export data used when importing data, which may be
 * in an old form. Any validation or updating will be done when
 * it is loaded.
 */
export const exportDataLikeSchema = z.object({
  history: z.unknown().optional(),
  others: z.unknown().optional(),
  running: z.unknown().optional(),
  sleep: z.unknown().optional(),
  steps: z.unknown().optional(),
  profile: z.unknown().optional(),
});
export type ExportDataLike = z.infer<typeof exportDataLikeSchema>;
export const isExportDataLike = isZodSchemaType(exportDataLikeSchema);
