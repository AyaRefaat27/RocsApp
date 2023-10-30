import React, { useEffect, useState } from "react";
import "../../App.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function DataTable(props) {
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

  return (
    <Box
      sx={{
        height: "100% auto",
        width: "100%",
        m: 1,
        p: 2,
        // "& .actions": {
        //   color: "#d1a981",
        // },
        // "& .textPrimary": {
        //   color: "text.primary",
        // },
      }}
    >
      <DataGrid
        rows={props.rows}
        columns={[...props.columns]}
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
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnSelector
        disableDensitySelector
      />
    </Box>
  );
}
