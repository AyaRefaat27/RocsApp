import { Avatar, Box, Button, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CompanyUsers({ compnayUsers }) {
  const [users, setUsers] = useState([]);
  const { t } = useTranslation();
  const getRowId = (row) => row.UserID;
  const selectedCompanyId = compnayUsers.CompanyID;

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
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 250,
      cellClassName: "actions",
      renderCell: (params) => {
        const label = { inputProps: { "aria-label": "Size switch demo" } };
        return (
          <>
            <Tooltip placement="bottom" arrow title="Delete">
              <Button
                size="small"
                color="error"
                varient="contained"
                onClick={() => handleDeleteUser(params.row.UserID)}
              >
                Delete
              </Button>
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
          // checkboxSelection
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
