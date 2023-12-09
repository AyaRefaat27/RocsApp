import React, { useEffect, useRef, useState } from "react";
import "../../../App.css";
import { Button, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { GridActionsCellItem, DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";

export default function UsersTeam({ user }) {
  const getRowId = (row) => row.UserID;

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
    { field: "UserID", headerName: `${t("ID")}`, width: 70 },
    {
      field: "TeamName",
      headerName: `${t("Team Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "Role",
      headerName: `${t(" Role")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 250,
      cellClassName: "actions",
      renderCell: (params) => {
        const label = { inputProps: { "aria-label": "Size switch demo" } };
        return (
          <>
            <Tooltip placement="bottom" arrow title="Delete">
              <GridActionsCellItem
                icon={
                  <Button variant="outlined" size="small" color="error">
                    Delete
                  </Button>
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

  const rows = [
    {
      UserID: 1,
      TeamName: "Frontend",
      Role: "Junior",
    },
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
          rows={rows}
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
