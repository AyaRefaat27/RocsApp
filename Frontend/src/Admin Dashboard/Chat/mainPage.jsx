import React, { useState } from "react";
import SideNav from "../Sidnav/sidenav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";
import TopSubNav from "./SubNavs/topSubNav";

import { createTheme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import SideMenu from "./SubNavs/sideMenu";
import SideNavMenu from "./SubNavs/SideNavMenu";
import MessageCard from "./SubPages/messageCard";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation();
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
          <Typography variant="h4">{t("Chatbot")}</Typography>

          <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
            <Grid container spacing={3}>
              <Grid xs>
                <Item sx={{ p: 2 }}>
                  <Box>
                    <SideNavMenu />
                  </Box>
                </Item>
              </Grid>
              <Grid xs={6}>
                <Item>
                  <TopSubNav />
                </Item>
              </Grid>
              <Grid xs>
                <Item>
                  <MessageCard />
                </Item>
              </Grid>
            </Grid>
          </Box>

          {/* <table width="100%">
            <tr>
              <td width="20%">
                <SideNavMenu />
              </td>
              <td width="50%">
                <TopSubNav />
              </td>
              <td width="20%">
                <MessageCard />
              </td>
            </tr>
          </table> */}
        </Box>
      </Box>
    </>
  );
}
