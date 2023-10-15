import { Box, Button, MenuItem, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideMenu from "./sideMenu";
import ListDialog from "../SubPages/listDialog";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

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
            label={t("Select")}
            defaultValue={t("Main Menu")}
            helperText={t("Select Menu")}
          >
            {currencies.map((option) => (
              <MenuItem key={t(`${option.value}`)} value={t(`${option.value}`)}>
                {t(`${option.label}`)}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <SideMenu lists={lists} />

        <div>
          <Button
            variant="outlined"
            fullWidth
            onClick={handleDialogOpen}
            sx={{ color: "#be9164" }}
          >
            {t("New Menu")}
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
