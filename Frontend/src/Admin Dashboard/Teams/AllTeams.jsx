import React, { useEffect, useState } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import { FormControl, MenuItem, Select, Switch, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import DataTable from "../Shared/DataTable";
import { teamsRows } from "../Shared/data";
import {
  ContactPhoneRounded,
  DeleteSweepRounded,
  EditNoteRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { GridActionsCellItem } from "@mui/x-data-grid";

export default function AllTeams() {
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
    { field: "id", headerName: `${t("ID")}`, width: 70 },
    {
      field: "name",
      headerName: `${t("Team Name")}`,
      width: 170,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "field",
      headerName: `${t("Team Field")}`,
      width: 170,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "location",
      headerName: `${t("Location")}`,
      width: 150,
    },

    {
      field: "employess",
      headerName: `${t("Team Members")}`,
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "branche",
      headerName: `${t("Company Branche")}`,
      width: 170,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 200,
      cellClassName: "actions",
      renderCell: () => {
        const label = { inputProps: { "aria-label": "Size switch demo" } };
        return (
          <>
            <Tooltip placement="bottom" arrow title="Revoke">
              <GridActionsCellItem
                icon={<Switch {...label} defaultChecked size="small" />}
                label="Revoke"
                color="inherit"
              />
            </Tooltip>

            <Tooltip placement="bottom" arrow title="Contacts">
              <GridActionsCellItem
                icon={
                  <ContactPhoneRounded
                    color="secondary"
                    sx={{ fontSize: "25px" }}
                  />
                }
                label="Contacts"
                color="inherit"
              />
            </Tooltip>

            <Tooltip placement="bottom" arrow title="View">
              <GridActionsCellItem
                icon={
                  <VisibilityRounded color="info" sx={{ fontSize: "25px" }} />
                }
                label="View"
                color="inherit"
              />
            </Tooltip>

            <Tooltip placement="bottom" arrow title="Edit">
              <GridActionsCellItem
                icon={
                  <EditNoteRounded color="success" sx={{ fontSize: "25px" }} />
                }
                label="Edit"
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

  const rows = [
    {
      id: 1,
      name: "Facebook",
      location: "Calefornia",
      phone: 38292114,
      address: "USA",
      employess: 2100,
    },
    {
      id: 2,
      name: "Facebook",
      location: "Calefornia",
      phone: 38292114,
      address: "USA",
      employess: 2100,
    },
  ];

  return (
    <>
      <DataTable columns={columns} rows={teamsRows} />
    </>
  );
}
