import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import UploadPhoto from "./UploadPhoto";
import UserDetails from "./UserDetails";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function AddUser() {
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
    <Box
      sx={{
        flexGrow: 1,
        margin: "20px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 3,
        width: "100%",
      }}
    >
      <Box sx={{ width: "350px" }}>
        <UploadPhoto />
      </Box>
      <Box sx={{ width: "70%" }}>
        <UserDetails />
      </Box>
    </Box>
  );
}
