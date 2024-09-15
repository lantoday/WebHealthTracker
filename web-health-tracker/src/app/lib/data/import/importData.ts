import { readExportDataFromFile } from "./readExportDataFromFile";
import { loadExportData } from "./loadExportData";

/**
 * Prompt the user to select a file, then attempt to read it and
 * import its contents as data and save it.
 *
 * If an error is encountered, a UI alert will be shown.
 */
export async function importData(): Promise<void> {
  const data = await (async () => {
    try {
      return await readExportDataFromFile();
    } catch (e) {
      console.error(e);
      return;
    }
  })();

  if (!data) {
    // No file was selected
    return;
  }

  try {
    // await loadExportData(local, data);
    await loadExportData(data);
  } catch (e) {
    console.error(e);
  }
}
