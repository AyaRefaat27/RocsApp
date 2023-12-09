import { Box, Button, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CompnayTeams({ companyTeams }) {
  const [teams, setTeams] = useState([]);
  const getRowId = (row) => row.TeamID;
  const selectedCompanyId = companyTeams.CompanyID;

  // Language
  const { t } = useTranslation();

  const columns = [
    { field: "TeamID", headerName: `${t("ID")}`, width: 70 },
    {
      field: "TeamName",
      headerName: `${t("Team Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "TeamMail",
      headerName: `${t("Team Mail")}`,
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
              <Button size="small" color="error" varient="contained">
                Delete
              </Button>
            </Tooltip>
          </>
        );
      },
    },
  ];

  // Get Teams
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/team");
        const data = await response.json();

        // Filter users by CompanyID
        const filteredUsers = data.filter(
          (team) => team.CompanyID === parseInt(selectedCompanyId, 10)
        );

        setTeams(filteredUsers);
        console.log(filteredUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCompanyId]);

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
          rows={teams}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
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
        />
      </Box>
    </>
  );
}
