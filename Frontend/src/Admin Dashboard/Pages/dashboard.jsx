import React from "react";
import SideNav from "../Sidnav/sidenav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex", marginTop: "40px" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4">Dashboard</Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
