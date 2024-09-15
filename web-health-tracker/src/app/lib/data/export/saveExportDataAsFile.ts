import { getCurrentDateDayName } from "../../utils/getCurrentDateDayName";
import type { ExportDataInfo } from "./ExportDataInfo";

/**
 * Save an ExportData object to a file.
 */
export function saveExportDataAsFile(data: ExportDataInfo): void {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  const dataUrl = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = dataUrl;
  downloadLink.download = `web-health-tracker-${getCurrentDateDayName()}`;
  downloadLink.click();

  URL.revokeObjectURL(dataUrl);
}
