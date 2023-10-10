import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { Popover } from "@mui/material";
import { CreateNewFolderRounded } from "@mui/icons-material";

export default function RightClickMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(`Clicked on ${menuItem}`);
    handleClose();
  };
  return (
    <Popover
      sx={{ width: 320, maxWidth: "100%" }}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <MenuList>
        <MenuItem onClick={() => handleMenuItemClick(" Create New Menu")}>
          <ListItemIcon>
            <CreateNewFolderRounded fontSize="small" />
          </ListItemIcon>
          <ListItemText>Create New Menu</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘N
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick(" Create New Menu")}>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy Menu</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
      </MenuList>
    </Popover>
  );
}

// anchorOrigin={{
//   vertical: "bottom",
//   horizontal: "right",
// }}
// transformOrigin={{
//   vertical: "top",
//   horizontal: "right",
// }}
