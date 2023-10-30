import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";

import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { useTranslation } from "react-i18next";
import Companies from "./Companies";
import SideNav from "../Sidnav/sidenav";
import Cookies from "js-cookie";

export default function CompanyPage() {
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
  const theme = createTheme();
  const Item = styled(Paper)(() => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
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
          <Typography variant="h4">{t("Companies")}</Typography>

          <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
            <Companies />
          </Box>
        </Box>
      </Box>
    </>
  );
}
