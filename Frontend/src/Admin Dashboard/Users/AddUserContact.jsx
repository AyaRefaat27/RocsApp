// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import AddIcon from "@mui/icons-material/Add";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import SaveIcon from "@mui/icons-material/Save";
// import CancelIcon from "@mui/icons-material/Close";
// import {
//   GridRowModes,
//   DataGrid,
//   GridToolbarContainer,
//   GridActionsCellItem,
//   GridRowEditStopReasons,
// } from "@mui/x-data-grid";
// import { randomId } from "@mui/x-data-grid-generator";
// import SelectContact from "./selectContact";
// import { FormControl, MenuItem, Select } from "@mui/material";
// import Cookies from "js-cookie";
// import { useTranslation } from "react-i18next";

// const initialRows = [
//   {
//     id: randomId(),
//     name: "Facebook",
//     link: "www.facebook.com",
//   },
// ];

// function EditToolbar(props) {
//   const { setRows, setRowModesModel } = props;

//   const handleClick = () => {
//     const id = randomId();
//     setRows((oldRows) => [...oldRows, { id, name: "", age: "", isNew: true }]);
//     setRowModesModel((oldModel) => ({
//       ...oldModel,
//       [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
//     }));
//   };

//   return (
//     <GridToolbarContainer>
//       <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
//         Add Contact
//       </Button>
//     </GridToolbarContainer>
//   );
// }

// export default function AddUserContact() {
//   const [rows, setRows] = React.useState(initialRows);
//   const [rowModesModel, setRowModesModel] = React.useState({});
//   const [users, setUsers] = React.useState("");

//   const handleChange = (event) => {
//     setUsers(event.target.value);
//   };

//   const handleRowEditStop = (params, event) => {
//     if (params.reason === GridRowEditStopReasons.rowFocusOut) {
//       event.defaultMuiPrevented = true;
//     }
//   };

//   // Language
//   const { t } = useTranslation();
//   const languages = [
//     {
//       lang: "Arabic",
//       code: "ar",
//       dir: "rtl",
//     },
//     {
//       lang: "English",
//       code: "en",
//     },
//   ];

//   const currentLanguageCode = Cookies.get("i18next") || "en";
//   const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

//   React.useEffect(() => {
//     document.body.dir = currentLanguage.dir || "ltr";
//     document.title = t("Title");
//   }, [currentLanguage, t]);

//   const userSelect = () => {
//     return (
//       <FormControl sx={{ m: 1, width: "100%" }}>
//         <Select
//           value={users}
//           onChange={handleChange}
//           displayEmpty
//           inputProps={{ "aria-label": "Without label" }}
//         >
//           <MenuItem value="aya">Aya</MenuItem>
//           <MenuItem value="eman">Eman</MenuItem>
//           <MenuItem value="ahmed">Ahmed</MenuItem>
//           <MenuItem value="mohamed">Mohamed</MenuItem>
//           <MenuItem value="hossam">Hossam</MenuItem>
//           <MenuItem value="hassan">Hassan</MenuItem>
//           <MenuItem value="asmaa">Asmaa</MenuItem>
//           <MenuItem value="shimaa">Shimaa</MenuItem>
//         </Select>
//       </FormControl>
//     );
//   };

//   const handleEditClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
//   };

//   const handleSaveClick = (id) => () => {
//     setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
//   };

//   const handleDeleteClick = (id) => () => {
//     setRows(rows.filter((row) => row.id !== id));
//   };

//   const handleCancelClick = (id) => () => {
//     setRowModesModel({
//       ...rowModesModel,
//       [id]: { mode: GridRowModes.View, ignoreModifications: true },
//     });

//     const editedRow = rows.find((row) => row.id === id);
//     if (editedRow.isNew) {
//       setRows(rows.filter((row) => row.id !== id));
//     }
//   };

//   const processRowUpdate = (newRow) => {
//     const updatedRow = { ...newRow, isNew: false };
//     setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
//     return updatedRow;
//   };

//   const handleRowModesModelChange = (newRowModesModel) => {
//     setRowModesModel(newRowModesModel);
//   };

//   const columns = [
//     {
//       field: "users",
//       headerName: `${t("Users")}`,
//       width: 250,
//       align: "left",
//       headerAlign: "left",
//       renderCell: () => {
//         return userSelect();
//       },
//       editable: true,
//     },

//     {
//       field: "contacts",
//       headerName: `${t("Contacts")}`,
//       width: 250,
//       align: "left",
//       headerAlign: "left",
//       renderCell: () => {
//         return <SelectContact />;
//       },
//       editable: true,
//     },

//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       width: 100,
//       cellClassName: "actions",
//       getActions: ({ id }) => {
//         const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

//         if (isInEditMode) {
//           return [
//             <GridActionsCellItem
//               icon={<SaveIcon />}
//               label="Save"
//               sx={{
//                 color: "primary.main",
//               }}
//               onClick={handleSaveClick(id)}
//             />,
//             <GridActionsCellItem
//               icon={<CancelIcon />}
//               label="Cancel"
//               className="textPrimary"
//               onClick={handleCancelClick(id)}
//               color="inherit"
//             />,
//           ];
//         }

//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             className="textPrimary"
//             onClick={handleEditClick(id)}
//             color="inherit"
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             onClick={handleDeleteClick(id)}
//             color="inherit"
//           />,
//         ];
//       },
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         height: "100%",
//         width: "70%",
//         margin:"50px auto",
//         "& .actions": {
//           color: "text.secondary",
//         },
//         "& .textPrimary": {
//           color: "text.primary",
//         },
//       }}
//     >
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         rowModesModel={rowModesModel}
//         onRowModesModelChange={handleRowModesModelChange}
//         onRowEditStop={handleRowEditStop}
//         processRowUpdate={processRowUpdate}
//         slots={{
//           toolbar: EditToolbar,
//         }}
//         slotProps={{
//           toolbar: {
//             setRows,
//             setRowModesModel,
//           },
//         }}
//       />
//     </Box>
//   );
// }

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SelectContact from "./selectContact";

export default function AddUserContact() {
  const [users, setUsers] = useState("");

  const handleChange = (event) => {
    setUsers(event.target.value);
  };
  return (
    <>
      <Typography gutterBottom variant="h4" component="div">
        Add Contact
      </Typography>

      <Box component="form" Validate sx={{ width: "70%" }}>
        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12}>
            <FormControl sx={{ m: 1, width: "100%" }}>
              <InputLabel id="demo-label">System Users</InputLabel>
              <Select
                value={users}
                onChange={handleChange}
                displayEmpty
                labelId="demo-label"
              >
                <MenuItem value="aya">Aya</MenuItem>
                <MenuItem value="eman">Eman</MenuItem>
                <MenuItem value="ahmed">Ahmed</MenuItem>
                <MenuItem value="mohamed">Mohamed</MenuItem>
                <MenuItem value="hossam">Hossam</MenuItem>
                <MenuItem value="hassan">Hassan</MenuItem>
                <MenuItem value="asmaa">Asmaa</MenuItem>
                <MenuItem value="shimaa">Shimaa</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <SelectContact />
          </Grid>
        </Grid>
      </Box>

      <Button size="medium" color="primary" type="submit">
        Save Changes
      </Button>
    </>
  );
}
