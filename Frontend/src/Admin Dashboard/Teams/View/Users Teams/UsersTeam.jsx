import React, { useEffect, useState } from "react";
import "../../../../App.css";
import { Box, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { DeleteSweepRounded } from "@mui/icons-material";
import { GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

export default function UsersTeam() {
  const [teams, setTeams] = useState([]);
  const getRowId = (row) => row.TeamID;
  // Language
  const { t } = useTranslation();

  const columns = [
    { field: "TeamID", headerName: `${t("ID")}`, width: 70 },
    {
      field: "UserName",
      headerName: `${t("User Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "UserRole",
      headerName: `${t("User Role")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 200,
      cellClassName: "actions",
      renderCell: (params) => {
        const label = { inputProps: { "aria-label": "Size switch demo" } };
        return (
          <>
            <Tooltip placement="bottom" arrow title="Delete">
              <GridActionsCellItem
                icon={
                  <DeleteSweepRounded color="error" sx={{ fontSize: "25px" }} />
                }
                label="Delete"
                color="inherit"
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  // Get Teams
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch("http://localhost:3002/api/team");
  //         const data = await response.json();

  //         // Filter users by CompanyID
  //         const filteredUsers = data.filter(
  //           (team) => team.CompanyID === parseInt(selectedCompanyId, 10)
  //         );

  //         setTeams(filteredUsers);
  //         console.log(filteredUsers);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchData();
  //   }, [selectedCompanyId]);

  const team = [
    { TeamID: 1, UserName: "John Doe", UserRole: "Admin" },
    { TeamID: 2, UserName: "Jane Smith", UserRole: "User" },
    // Add more initial data here if needed
  ];
  return (
    <>
      <Box
        sx={{
          height: "100% auto",
          width: "100%",
          m: 1,
          p: 2,
        }}
      >
        <DataGrid
          rows={team}
          // rows={teams}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
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
          checkboxSelection
        />
      </Box>
    </>
  );
}
