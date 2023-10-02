import React from "react";
import SideNav from "../Sidnav/sidenav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";
import Lists from "../Settings/lists";
// import { Divider } from "@mui/material";

export default function Setting() {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex", marginTop: "40px" }}>
        <SideNav />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, background: "rgba(0, 0, 0, 0.04)" }}
        >
          <Typography variant="h4">Setting</Typography>
          <Lists />
        </Box>
      </Box>
    </>
  );
}
