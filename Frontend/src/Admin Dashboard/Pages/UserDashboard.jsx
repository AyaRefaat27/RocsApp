import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";
import { useTranslation } from "react-i18next";
import UserSideNav from "../Sidnav/UserSideNav";

export default function UserDashboard() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex", marginTop: "40px" }}>
        <UserSideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">{t("Dashboard")}</Typography>
        </Box>
      </Box>
    </>
  );
}
