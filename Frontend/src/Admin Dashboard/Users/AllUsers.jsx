import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import { Switch, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { GridActionsCellItem, DataGrid, GridToolbar } from "@mui/x-data-grid";
import { DeleteSweepRounded, VisibilityRounded } from "@mui/icons-material";

import { Box } from "@mui/material";
import ViewUserDetails from "./ViewUserDetails";

export default function AllUsers() {
  const [viewDialog, setViewDialog] = useState(false);

  const [users, setUsers] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  var [selectedUser, setSelectedUser] = useState({});
  const getRowId = (row) => row.UserID;
  const selectedCompanyId = localStorage.getItem("selectedCompanyId");

  // const [teamDialogOpen, setTeamDialogOpen] = useState(false);
  // const [contactDialogOpen, setContactDialogOpen] = useState(false);
  // const [dialogOpen, setDialogOpen] = useState(false);

  // const handleDialogOpen = () => {
  //   setDialogOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setDialogOpen(false);
  // };

  // const handleContactDialogOpen = (event, params) => {
  //   // console.log(event);
  //   // console.log(params);
  //   setSelectedUser(params.row);
  //   // selectedUser = params.row;
  //   // console.log(selectedUser.UserID);
  //   // console.log(selectedUser);
  //   // console.log(selectedRows);
  //   setContactDialogOpen(true);
  // };

  // const handleContactDialogClose = () => {
  //   setContactDialogOpen(false);
  //   setSelectedUser({});
  //   // console.log(selectedUser);
  // };

  // const handleTeamDialogOpen = () => {
  //   setTeamDialogOpen(true);
  // };

  // const handleTeamDialogClose = () => {
  //   setTeamDialogOpen(false);
  // };

  const handleViewDialogOpen = (event, params) => {
    setSelectedUser(params.row);
    setViewDialog(true);
  };

  const handleViewDialogClose = () => {
    setViewDialog(false);
    setSelectedUser({});
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
    { field: "UserID", headerName: `${t("ID")}`, width: 70 },
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
      field: "NameEnglish",
      headerName: `${t("Name")}`,
      width: 150,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "UserMail",
      headerName: `${t("Email")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "UserName",
      headerName: `${t("UserName")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "UserPhone",
      headerName: `${t("Phone")}`,
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "lastLogin",
      headerName: `${t("Last Login")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "StatusID",
      headerName: `${t("Status")}`,
      // type: "string",
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
            <Tooltip placement="bottom" arrow title="Revoke">
              <GridActionsCellItem
                icon={<Switch {...label} defaultChecked size="small" />}
                label="Revoke"
                color="inherit"
              />
            </Tooltip>

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
              {/* <EditUser open={dialogOpen} onClose={handleDialogClose} /> */}
            </Tooltip>

            <Tooltip placement="bottom" arrow title="Delete">
              <GridActionsCellItem
                icon={
                  <DeleteSweepRounded color="error" sx={{ fontSize: "25px" }} />
                }
                label="Delete"
                color="inherit"
                onClick={() => handleDeleteUser(params.row.UserID)}
              />
            </Tooltip>
          </>
        );
      },
    },
  ];

  // Delete User
  const deleteUser = async (UserID) => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/user?userID=${UserID}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // User deleted successfully, update the state
        setUsers(users.filter((user) => user.UserID !== UserID));
      } else {
        console.error("Error deleting user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleDeleteUser = (UserID) => {
    console.log("Selected UserID for deletion:", UserID);
    deleteUser(UserID);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3002/api/user");
        const data = await response.json();

        // Filter users by CompanyID
        const filteredUsers = data.filter(
          (user) =>
            user.CompanyID === parseInt(selectedCompanyId, 10) &&
            user.Active === true
        );

        setUsers(filteredUsers);
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
          rows={users}
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
            console.log(users);
            console.log(ids);
            const selectedIDs = new Set(ids);
            const selectedRows = users.filter((row) => selectedIDs.has(row));

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
        {/* <pre style={{ fontSize: 10 }}>
          {JSON.stringify(selectedUser, null, 4)}
        </pre> */}
        {/* <DataGrid
          rows={users}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = users.rows.filter((row) => {
              selectedIDs.has(row.UserID);
            });
            console.log(selectedRowData);
          }}
          rowSelectionModel={rowSelectionModel}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableColumnSelector
          disableDensitySelector
        /> */}
        {/* <EditUser open={dialogOpen} onClose={handleDialogClose} />
        <ContactsDialog
          open={contactDialogOpen}
          data={selectedUser}
          onClose={handleContactDialogClose}
        /> */}
        <ViewUserDetails
          open={viewDialog}
          onClose={handleViewDialogClose}
          userData={selectedUser}
        />
      </Box>
    </>
  );
}
