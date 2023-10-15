import React, { useEffect, useState } from "react";
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
import { LocalActivityRounded, MenuBookRounded } from "@mui/icons-material";
import { List } from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ContentCopy from "@mui/icons-material/ContentCopy";
import { Popover } from "@mui/material";
import { CreateNewFolderRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function SideMenu({ lists }) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // PopOver
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleListButtonClick = (event) => {
    event.preventDefault();
    setMenuAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleListItemClick = (action) => {
    setMenuOpen(false);
    // Perform the desired action based on the clicked item
    if (action === "addList") {
      console.log("Add new list");
    } else if (action === "copyList") {
      console.log("Copy existing list");
    }
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
                  <Button varient="filled" sx={{ color: "#be9164" }}>
                    {t(`${list.subheader}`)}
                  </Button>
                </ListSubheader>
              }
            >
              {list.items.map((item, itemIndex) => {
                return (
                  <>
                    <ListItemButton
                      onContextMenu={handleListButtonClick}
                      onClick={handleClick}
                      key={itemIndex}
                    >
                      <ListItemIcon>
                        <MenuBookRounded sx={{ color: "#be9164" }} />
                      </ListItemIcon>
                      <ListItemText primary={t(`${item}`)} />

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
                              <ListItemButton
                                sx={{ pl: 3 }}
                                onContextMenu={handleListButtonClick}
                              >
                                <ListItemIcon>
                                  <ArrowRightRoundedIcon
                                    sx={{ color: "#be9164" }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={t(`${subItem}`)} />
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

      {/* PopOver */}

      <Popover
        sx={{ width: 350, maxWidth: "100%" }}
        open={menuOpen}
        anchorEl={menuAnchorEl}
        onClose={() => setMenuOpen(false)}
        keepMounted
        anchorPosition={{ left: 500 }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList sx={{ borderRadius: "10px", width: 300, p: 2 }}>
          <MenuItem onClick={() => handleListItemClick("addList")}>
            <ListItemIcon>
              <CreateNewFolderRounded
                fontSize="small"
                sx={{ color: "#be9164" }}
              />
            </ListItemIcon>
            <ListItemText>{t("Create New Menu")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleListItemClick("copyList")}>
            <ListItemIcon>
              <ContentCopy fontSize="small" sx={{ color: "#be9164" }} />
            </ListItemIcon>
            <ListItemText>{t("Copy Menu")}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleListItemClick("activeList")}>
            <ListItemIcon>
              <LocalActivityRounded
                fontSize="small"
                sx={{ color: "#be9164" }}
              />
            </ListItemIcon>
            <ListItemText>{t("Active Menu")}</ListItemText>
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}
