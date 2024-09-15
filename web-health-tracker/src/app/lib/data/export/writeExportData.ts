import type { ExportDataInfo } from "./ExportDataInfo";

import { getHistory } from "../../dbactions/history";
import { getRunningData } from "../../dbactions/running";
import { getSleepData } from "../../dbactions/sleep";
import { getSteps } from "../../dbactions/steps";
import { getProfile } from "../../dbactions/profile";
import { getOtherWorkoutData } from "../../dbactions/other-workouts";

/**
 * Write all data in memory to an ExportData object.
 */
export async function writeExportData(): Promise<ExportDataInfo> {
  const historyData = await getHistory();
  const runningData = await getRunningData();
  const sleepData = await getSleepData();
  const stepsData = await getSteps();
  const profileData = await getProfile();
  const otherWorkoutData = await getOtherWorkoutData();

  const data: ExportDataInfo = {
    history: (historyData ?? []).map((historyInfo) => [
      historyInfo.date,
      historyInfo,
    ]),
    others: (otherWorkoutData ?? []).map((otherWorkoutInfo) => [
      otherWorkoutInfo.date,
      otherWorkoutInfo,
    ]),
    running: (runningData ?? []).map((runningInfo) => [
      runningInfo.date,
      runningInfo,
    ]),
    sleep: (sleepData ?? []).map((sleepInfo) => [sleepInfo.date, sleepInfo]),
    steps: (stepsData ?? []).map((stepsInfo) => [stepsInfo.date, stepsInfo]),
    profile: profileData ? [[profileData.firstName, profileData]] : [], // Ensure profileData is of type Profile
  };

  return data;
}
