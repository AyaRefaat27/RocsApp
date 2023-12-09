import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Checkbox, TextField } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "channelName", headerName: "Channel Name", width: 200 },
  {
    field: "enabled",
    headerName: "Enabled",
    width: 150,
    renderCell: (params) => (
      <Checkbox
        checked={params.value}
        onChange={(e) => console.log(e.target.checked)}
      />
    ),
  },
  {
    field: "autoAnswer",
    headerName: "Auto Answer",
    width: 150,
    renderCell: (params) => (
      <Checkbox
        checked={params.value}
        onChange={(e) => console.log(e.target.checked)}
      />
    ),
  },
  {
    field: "loginStatus",
    headerName: "Login Status",
    width: 150,
    renderCell: (params) => (
      <TextField value={params.value} variant="standard" disabled />
    ),
  },
  {
    field: "maxConcurrentInteractions",
    headerName: "Max Concurrent Interactions",
    width: 250,
    renderCell: (params) => (
      <TextField
        type="number"
        value={params.value}
        variant="standard"
        onChange={(e) => console.log(e.target.value)}
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    channelName: "Channel 1",
    enabled: true,
    autoAnswer: false,
    loginStatus: "Active",
    maxConcurrentInteractions: 5,
  },
  // Add more rows as needed
];

export default function UserChannels() {
  return (
    <div style={{ height: 200, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnSelector
        disableDensitySelector
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
