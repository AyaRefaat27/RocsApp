import React, { useEffect, useState } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import { Switch, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import DataTable from "../Shared/DataTable";
import { usersRows } from "../Shared/data";
import { GridActionsCellItem } from "@mui/x-data-grid";
import {
  ConnectWithoutContactRounded,
  ContactPhoneRounded,
  DeleteSweepRounded,
  EditNoteRounded,
  GroupRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import EditUser from "../User Profile/EditUser";
import ContactsDialog from "./ContactsDialog";
import TeamsDialog from "./TeamsDialog";

export default function AllUsers() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [teamDialogOpen, setTeamDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleContactDialogOpen = () => {
    setContactDialogOpen(true);
  };

  const handleContactDialogClose = () => {
    setContactDialogOpen(false);
  };

  const handleTeamDialogOpen = () => {
    setTeamDialogOpen(true);
  };

  const handleTeamDialogClose = () => {
    setTeamDialogOpen(false);
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
      headerName: `${t("Name")}`,
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
      field: "username",
      headerName: `${t("UserName")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
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
      field: "lastlogin",
      headerName: `${t("Last Login")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "status",
      headerName: `${t("Status")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "verified",
      headerName: `${t("Verified")}`,
      width: 100,
      type: "boolean",
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 250,
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
                onClick={handleContactDialogOpen}
              />
            </Tooltip>

            <Tooltip placement="bottom" arrow title="Teams">
              <GridActionsCellItem
                icon={
                  <GroupRounded color="warning" sx={{ fontSize: "25px" }} />
                }
                label="Teams"
                color="inherit"
                onClick={handleTeamDialogOpen}
              />
            </Tooltip>

            <Tooltip placement="bottom" arrow title="View">
              <GridActionsCellItem
                icon={
                  <VisibilityRounded
                    color="info"
                    sx={{ fontSize: "25px" }}
                    onClick={handleDialogOpen}
                  />
                }
                label="View"
                color="inherit"
              />
              {/* <EditUser open={dialogOpen} onClose={handleDialogClose} /> */}
            </Tooltip>

            <Tooltip placement="bottom" arrow title="Edit">
              <GridActionsCellItem
                icon={
                  <EditNoteRounded color="success" sx={{ fontSize: "25px" }} />
                }
                label="Edit"
                color="inherit"
                onClick={handleDialogOpen}
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
      <DataTable columns={columns} rows={usersRows} />
      <EditUser open={dialogOpen} onClose={handleDialogClose} />
      <ContactsDialog
        open={contactDialogOpen}
        onClose={handleContactDialogClose}
      />
      <TeamsDialog open={teamDialogOpen} onClose={handleTeamDialogClose} />
    </>
  );
}
