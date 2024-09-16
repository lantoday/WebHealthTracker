import { exportData } from "@/app/lib/data/export/exportData";
import { importData } from "@/app/lib/data/import/importData";
import { clearData } from "@/app/lib/indexedDB/doDatabaseTransaction";

export function Tools() {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await clearData();
      window.alert("Data cleared successfully");
      window.location.reload();
    } catch (error) {
      window.alert("Failed to clear data");
      console.error("Failed to clear data:", error);
    }
  };
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
            onClick={handleClick}
          >
            Clear data
          </button>
        </div>
      </div>
    </>
  );
}

export default Tools;
