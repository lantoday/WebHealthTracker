import { exportData } from "@/app/lib/data/export/exportData";
import { importData } from "@/app/lib/data/import/importData";

export function Tools() {
  return (
    <>
      <div className="p-4">
        <div className="d-flex justify-content-center h4">Tool box</div>
        <hr />
        <div className="pt-3 d-flex justify-content-around">
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={exportData}
          >
            Export data
          </button>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={importData}
          >
            Import data
          </button>
          <button
            className="btn btn-outline-primary btn-lg"
            onClick={() => (window.location.href = "/management/upsert")}
          >
            Clear data
          </button>
        </div>
      </div>
    </>
  );
}

export default Tools;
