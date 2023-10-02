import { Button, createTheme } from "@mui/material";
import styled from "@emotion/styled";

import React from "react";

function CustomButton({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
}) {
  const theme = createTheme();
  const CustomButton = styled(Button)(() => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    },
  }));
  return <CustomButton buttonText></CustomButton>;
}

export default CustomButton;
