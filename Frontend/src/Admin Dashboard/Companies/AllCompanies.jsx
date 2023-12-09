import React, { useEffect, useState } from "react";
import "../../App.css";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import ViewDialog from "./View/ViewDialog";

export default function AllCompanies() {
  const [viewDialog, setViewDialog] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  var [selectedCompany, setSelectedCompany] = useState({});
  const getRowId = (row) => row.CompanyID;
  const selectedCompanyId = localStorage.getItem("selectedCompanyId");
  const userID = localStorage.getItem("creationUserID");

  const handleViewDialogOpen = (event, params) => {
    setSelectedCompany(params.row);
    setViewDialog(true);
  };

  const handleViewDialogClose = () => {
    setViewDialog(false);
    setSelectedCompany({});
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
    { field: "CompanyID", headerName: `${t("ID")}`, width: 70 },

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
      headerName: `${t("Company English Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "NameArabic",
      headerName: `${t("Company Arabic Name")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "Phone",
      headerName: `${t("Phone")}`,
      type: "number",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "Mail",
      headerName: `${t("Email")}`,
      type: "string",
      width: 200,
      align: "left",
      headerAlign: "left",
    },
    {
      field: "CountryID",
      headerName: `${t("Country")}`,
      width: 150,
    },
    {
      field: "City",
      headerName: `${t("City")}`,
      type: "number",
      width: 150,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "ParentCompanyID",
      headerName: `${t("Parent Company")}`,
      width: 200,
      align: "left",
      headerAlign: "left",
    },

    {
      field: "actions",
      headerName: `${t("Actions")}`,
      width: 300,
      cellClassName: "actions",
      renderCell: (params) => {
        return (
          <>
            <GridActionsCellItem
              icon={
                <Button
                  variant="contained"
                  size="small"
                  color="info"
                  onClick={(event) => {
                    handleViewDialogOpen(event, params);
                  }}
                >
                  View
                </Button>
              }
              label="View"
              className="textPrimary"
              color="inherit"
            />

            <GridActionsCellItem
              icon={
                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  onClick={() => deleteCompany(params.row.CompanyID)}
                >
                  Delete
                </Button>
              }
              label="Delete"
              color="inherit"
            />
          </>
        );
      },
    },
  ];

  // Get all Companies
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/company?userID=${userID}`
        );
        const data = await response.json();

        setCompanies(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  //Delete Company
  const deleteCompany = async (CompanyID) => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/company?companyID=${CompanyID}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Company deleted successfully, update the state to remove the deleted company
        setCompanies(
          companies.filter((company) => company.CompanyID !== CompanyID)
        );
        alert("Company Deleted");
      } else {
        console.error("Error deleting company");
      }
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

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
          rows={companies}
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
            console.log(companies);
            console.log(ids);
            const selectedIDs = new Set(ids);
            const selectedRows = companies.filter((row) =>
              selectedIDs.has(row)
            );

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

        <ViewDialog
          open={viewDialog}
          onClose={handleViewDialogClose}
          company={selectedCompany}
        />
      </Box>
    </>
  );
}
