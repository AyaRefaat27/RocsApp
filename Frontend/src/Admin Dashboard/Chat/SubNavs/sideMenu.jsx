import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { MenuBookRounded } from "@mui/icons-material";
import { List } from "@mui/material";

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

export default function SideMenu() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
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
      </Box>

      <Box>
        <List
          sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              My Chatbot
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <MenuBookRounded />
            </ListItemIcon>
            <ListItemText primary="Main Menu" />

            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        {/* <div>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <ListItemText primary="Dropdown List" />
            </AccordionSummary>
            <AccordionDetails>
              <List component="nav">
                <ListItem button>
                  <ListItemText primary="Option 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Option 3" />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </div> */}
      </Box>

      <Button variant="outlined" fullWidth>
        New Menu
      </Button>
    </>
  );
}
