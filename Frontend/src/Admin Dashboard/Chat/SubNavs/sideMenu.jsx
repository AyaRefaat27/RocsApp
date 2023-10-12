import React, { useState } from "react";
import Box from "@mui/material/Box";
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

export default function SideMenu({ lists }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
        {lists.map((list, index) => {
          return (
            <List
              key={index}
              sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  <Button varient="filled">{list.subheader}</Button>
                </ListSubheader>
              }
            >
              {list.items.map((item, itemIndex) => {
                return (
                  <>
                    <ListItemButton onClick={handleClick} key={itemIndex}>
                      <ListItemIcon>
                        <MenuBookRounded />
                      </ListItemIcon>
                      <ListItemText primary={item} />

                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      {list.sublist.map((subItem, subItemIndex) => {
                        return (
                          <>
                            <List
                              component="div"
                              disablePadding
                              key={subItemIndex}
                            >
                              <ListItemButton sx={{ pl: 3 }}>
                                <ListItemIcon>
                                  <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={subItem} />
                              </ListItemButton>
                            </List>
                          </>
                        );
                      })}
                    </Collapse>
                  </>
                );
              })}
            </List>
          );
        })}
      </Box>
    </>
  );
}
