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

export function deleteDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.deleteDatabase(dbName);

    request.addEventListener("success", () => {
      resolve(); // Indicate success without resolving with the result
    });

    request.addEventListener("error", (event) => {
      reject(
        (event.target as IDBOpenDBRequest).error ||
          new Error("An unknown error occurred")
      );
    });

    request.addEventListener("blocked", () => {
      window.alert("The database deleted");
      window.location.reload();
      // reject(new Error("The database is blocked and cannot be deleted"));
    });
  });
}
