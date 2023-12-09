import React, { useEffect, useState } from "react";
import "../../App.css";
import { Box, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { DeleteSweepRounded, VisibilityRounded } from "@mui/icons-material";
import { GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import ViewDialog from "./View/ViewDialog";

export default function AllTeams() {
  const [teams, setTeams] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  var [selectedTeam, setSelectedTeam] = useState({});
  const getRowId = (row) => row.TeamID;
  const selectedCompanyId = localStorage.getItem("selectedCompanyId");
  const [viewDialog, setViewDialog] = useState(false);

  const handleViewDialogOpen = (event, params) => {
    setSelectedTeam(params.row);
    setViewDialog(true);
  };

  const handleViewDialogClose = () => {
    setViewDialog(false);
    setSelectedTeam({});
  };

  // Language
  const { t } = useTranslation();
  const languages = [
    {
      lang: "Arabic",
      code: "ar",
      dir: "rtl",
    },
    {
      lang: "English",
      code: "en",
    },
  ];

  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("Title");
  }, [currentLanguage, t]);

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
      field: "ParentTeamID",
      headerName: `${t("Parent Team")}`,
      width: 150,
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
            <Tooltip placement="bottom" arrow title="View">
              <GridActionsCellItem
                icon={
                  <VisibilityRounded
                    color="info"
                    sx={{ fontSize: "25px" }}
                    onClick={(event) => {
                      handleViewDialogOpen(event, params);
                    }}
                  />
                }
                label="View"
                color="inherit"
              />
            </Tooltip>

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
          width: "70%",
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
          onRowSelectionModelChange={function (ids) {
            console.log(teams);
            console.log(ids);
            const selectedIDs = new Set(ids);
            const selectedRows = teams.filter((row) => selectedIDs.has(row));

            setSelectedRows(selectedRows);
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
        />
        <pre style={{ fontSize: 10 }}>
          {JSON.stringify(selectedTeam, null, 4)}
        </pre>

        <ViewDialog
          open={viewDialog}
          onClose={handleViewDialogClose}
          team={selectedTeam}
        />
      </Box>
    </>
  );
}
