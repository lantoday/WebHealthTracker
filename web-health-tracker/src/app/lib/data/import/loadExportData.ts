import { ExportDataLike } from "../export/ExportDataLike";
import { writeExportData } from "../export/writeExportData";
import {
  HistoryArray,
  StepArray,
  Profile,
  SleepArray,
  RunningArray,
  OthersArray,
} from "../../utils/definitions";
import { importHistoryToDb } from "../../dbactions/history";
import { importStepsToDb } from "../../dbactions/steps";
import { importSleepDataToDb } from "../../dbactions/sleep";
import { importRunningDataToDb } from "../../dbactions/running";
import { importOtherWorkoutDataToDb } from "../../dbactions/other-workouts";
import { saveProfileToDb } from "../../dbactions/profile";

/**
 * Try to load a set of data directly into memory.
 * If it fails, the Promise it returns will reject.
 */
async function loadExportDataDirect(data: ExportDataLike): Promise<void> {
  await Promise.all([
    importHistoryToDb(data.history as HistoryArray),
    importStepsToDb(data.steps as StepArray),
    importSleepDataToDb(data.sleep as SleepArray),
    importRunningDataToDb(data.running as RunningArray),
    importOtherWorkoutDataToDb(data.others as OthersArray),
    saveProfileToDb(data.profile as Profile),
  ]);
}

/**
 * Try to load a set of data directly into memory.
 * If it fails, restores a backup.
 */
export async function loadExportData(data: ExportDataLike): Promise<void> {
  // Take a backup in case we hit an error
  const backup = await writeExportData();

  try {
    await loadExportDataDirect(data);
  } catch (e) {
    try {
      // If something went wrong, try to restore the backup
      await loadExportDataDirect(backup);
    } catch (e) {
      // If restoring the backup failed, try to load persisted data again
      await Promise.all([
        importHistoryToDb(data.history as HistoryArray),
        importStepsToDb(data.steps as StepArray),
        importSleepDataToDb(data.sleep as SleepArray),
        importRunningDataToDb(data.running as RunningArray),
        importOtherWorkoutDataToDb(data.others as OthersArray),
        saveProfileToDb(data.profile as Profile),
      ]);
    }

    // Then re-throw error so it bubbles up
    throw e;
  }
}
