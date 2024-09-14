import { ObjectStoreName } from "./ObjectStoreName";

const dbName = "web-health-tracker";
const dbVersion = 1;

let db: IDBDatabase | null = null;
/**
 * The file copy from https://github.com/Cipscis/orange-twist
 *
 * Get a handle to the database, opening it if it wasn't
 * already open.
 */
export function getDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (db) {
      resolve(db);
      return;
    }

    const request = indexedDB.open(dbName, dbVersion);

    // Create the "data" object store when database is first created
    request.addEventListener("upgradeneeded", (e) => {
      request.result.createObjectStore(ObjectStoreName.DATA);
    });

    // Handle success
    request.addEventListener("success", () => {
      db = request.result;
      resolve(request.result);
    });

    // Handle errors
    request.addEventListener("error", reject);
    request.addEventListener("blocked", reject);
  });
}
