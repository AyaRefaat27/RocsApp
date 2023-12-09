import React, { useEffect, useState } from "react";
import "../../../App.css";
import { Box, Button, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { DeleteSweepRounded, VisibilityRounded } from "@mui/icons-material";
import { GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";

export default function UserSkills({ userSkill }) {
  const [skills, setSkills] = useState([]);
  const getRowId = (row) => row.SkillID;

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
    { field: "SkillID", headerName: `${t("ID")}`, width: 70 },
    {
      field: "SkillName",
      headerName: `${t("Skill Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "Description",
      headerName: `${t("Description")}`,
      width: 300,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "skillLevel",
      headerName: `${t("Skill Level")}`,
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
      SkillID: 1,
      SkillName: "Chat",
      Description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      skillLevel: 4,
    },
  ];

  // Get Skills
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3002/api/team");
  //       const data = await response.json();

  //       // Filter users by CompanyID
  //       const filteredUsers = data.filter(
  //         (team) => team.CompanyID === parseInt(selectedCompanyId, 10)
  //       );

  //       setTeams(filteredUsers);
  //       console.log(filteredUsers);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, [selectedCompanyId]);

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
        />
      </Box>
    </>
  );
}
