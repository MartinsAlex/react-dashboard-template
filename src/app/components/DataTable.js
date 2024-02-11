import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

const DataTable = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 10,
    maxColumns: 10, 
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        {...data}
        sx={{border: 0}}
        density="compact"
        slots={{
          toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default DataTable;
