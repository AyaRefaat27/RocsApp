import React, { useEffect, useState } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import DataTable from "../Shared/DataTable";
import { companiesRows } from "../Shared/data";
import { GridActionsCellItem } from "@mui/x-data-grid";
import {
  DeleteSweepRounded,
  EditNoteRounded,
  VisibilityRounded,
} from "@mui/icons-material";

export default function AllCompanies() {
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

  const [branche, setBranche] = useState("");

  const handleChange = (event) => {
    setBranche(event.target.value);
  };

  const brancheSelect = () => {
    return (
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <Select
          value={branche}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="">Facebook</MenuItem>
          <MenuItem value="meta">Meta</MenuItem>
          <MenuItem value="whatsapp">Whatsapp</MenuItem>
          <MenuItem value="instagram">Instagram</MenuItem>
        </Select>
      </FormControl>
    );
  };

  const columns = [
    { field: "id", headerName: `${t("ID")}`, width: 70 },
    {
      field: "photo",
      headerName: `${t("Photo")}`,
      width: 100,
      renderCell: (params) => {
        return (
          <Avatar
            alt=""
            src={params.row.photo || "/noavatar.png"}
            sx={{ width: 40, height: 40 }}
          />
        );
      },
    },
    {
      field: "name",
      headerName: `${t("Company Name")}`,
      width: 150,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "location",
      headerName: `${t("Location")}`,
      width: 150,
    },

    {
      field: "phone",
      headerName: `${t("Phone")}`,
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "email",
      headerName: `${t("Email")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "address",
      headerName: `${t("Address")}`,
      width: 150,
    },
    {
      field: "employess",
      headerName: `${t("Employees")}`,
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "branches",
      headerName: `${t("Company Branches")}`,
      width: 170,
      align: "left",
      headerAlign: "left",
      renderCell: () => {
        return brancheSelect();
      },
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 150,
      cellClassName: "actions",
      renderCell: () => {
        return (
          <>
            <GridActionsCellItem
              icon={
                <VisibilityRounded color="info" sx={{ fontSize: "25px" }} />
              }
              label="View"
              className="textPrimary"
              color="inherit"
            />

            <GridActionsCellItem
              icon={
                <EditNoteRounded color="success" sx={{ fontSize: "25px" }} />
              }
              label="Edit"
              className="textPrimary"
              color="inherit"
            />

            <GridActionsCellItem
              icon={
                <DeleteSweepRounded color="error" sx={{ fontSize: "25px" }} />
              }
              label="Delete"
              color="inherit"
            />
          </>
        );
      },
    },
    // {
    //   field: "actions",
    //   headerName: `${t("Actions")}`,
    //   width: 150,
    //   cellClassName: "actions",
    //   renderCell: () => {
    //     return (
    //       <>
    //         <GridActionsCellItem
    //           icon={
    //             <VisibilityRounded color="info" sx={{ fontSize: "25px" }} />
    //           }
    //           label="View"
    //           className="textPrimary"
    //           color="inherit"
    //         />

    //         <GridActionsCellItem
    //           icon={
    //             <EditNoteRounded color="success" sx={{ fontSize: "25px" }} />
    //           }
    //           label="Edit"
    //           className="textPrimary"
    //           color="inherit"
    //         />

    //         <GridActionsCellItem
    //           icon={
    //             <DeleteSweepRounded color="error" sx={{ fontSize: "25px" }} />
    //           }
    //           label="Delete"
    //           color="inherit"
    //         />
    //       </>
    //     );
    //   },
    // },
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
      <DataTable columns={columns} rows={companiesRows} />
    </>
  );
}
