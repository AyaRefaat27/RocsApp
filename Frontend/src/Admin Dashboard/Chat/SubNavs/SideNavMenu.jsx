import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import SideMenu from "./sideMenu";
import ListDialog from "../SubPages/listDialog";

const currencies = [
  {
    value: "Main Menu",
    label: "Message",
  },
  {
    value: "Sub Menu",
    label: "Menu 1",
  },
  {
    value: "Sub Menu",
    label: "Menu 2",
  },
  {
    value: "Sub Menu",
    label: "Menu 3",
  },
];

export default function SideNavMenu() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [lists, setLists] = useState([]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleListSave = (list) => {
    setLists((prevLists) => [...prevLists, list]);
    setDialogOpen(false);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90%" },
        }}
      >
        <div>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="Main Menu"
            helperText="Select Menu"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <SideMenu lists={lists} />

        <div>
          <Button variant="outlined" fullWidth onClick={handleDialogOpen}>
            New Menu
          </Button>
        </div>
        <ListDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onSave={handleListSave}
        />
      </Box>
    </>
  );
}
