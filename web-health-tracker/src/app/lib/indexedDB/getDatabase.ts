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
      request.result.createObjectStore(ObjectStoreName.PROFILE); //TODO should I use LocalStorage instead of IndexedDB for profile??
      request.result.createObjectStore(ObjectStoreName.EXERCISE);
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

// function clearObjectStore() {
//   var store = getObjectStore(DB_STORE_NAME, "readwrite");
//   var req = store.clear();
//   req.onsuccess = function (evt) {
//     displayActionSuccess("Store cleared");
//     displayPubList(store);
//   };
//   req.onerror = function (evt) {
//     console.error("clearObjectStore:", evt.target.errorCode);
//     displayActionFailure(this.error);
//   };
// }
