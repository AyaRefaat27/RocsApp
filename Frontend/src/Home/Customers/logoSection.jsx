import React from "react";
import { Box, Container, styled, Typography } from "@mui/material";
import LogoSlider from "./logoSlider";

export default function LogoSection() {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return (
    <Box sx={{ mt: 10 }}>
      <CustomContainer>
        <CustomBox>
          <img
            src="./assets/images/logo1.png"
            alt="logo"
            style={{ maxWidth: "100%", width: "150px" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            More than 45,000 trust QmmaTech
          </Typography>
        </CustomBox>

        <Box>
          <img
            src="./assets/images/Star.png"
            alt="stars"
            style={{ maxWidth: "100%" }}
          />
          <Typography
            variant="body2"
            sx={{
              color: "#7D8589",
              fontSize: "16px",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            5-Star Rating (2k+ Reviews)
          </Typography>
        </Box>
      </CustomContainer>

      <LogoSlider />
    </Box>
  );
}
