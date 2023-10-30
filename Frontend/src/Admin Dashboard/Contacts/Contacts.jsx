import React, { useEffect, useState } from "react";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";
import { useTranslation } from "react-i18next";
import SideNav from "../Sidnav/sidenav";
import Cookies from "js-cookie";
import AllContacts from "./AllContacts";
export default function Contacts() {
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
      <NavBar />
      <Box height={40} />
      <Box sx={{ display: "flex", marginTop: "30px" }}>
        <SideNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, background: "rgba(0, 0, 0, 0.02)" }}
        >
          <Typography variant="h4">{t("Contacts")}</Typography>

          <Divider />
          <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
            <AllContacts />
          </Box>
        </Box>
      </Box>
    </>
  );
}
