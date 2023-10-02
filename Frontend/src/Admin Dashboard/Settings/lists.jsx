import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import UserInfo from "./userInfo";
import Personal from "./personal";
import Password from "./password";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "#333",
    fontWeight: "bold",
    transition: "0.5s",
    "&.Mui-selected": {
      color: "pink",
      //   background: "linear-gradient(to right, #ffafbd, #ffc3a0)",
      //   borderRadius: "20px",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Lists() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "30px",
        background: "#fff",
        height: "100% auto",
        padding: "2rem",
        borderRadius: "10px",
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <StyledTab label="User Info" {...a11yProps(0)} />
          <StyledTab label="Change Passowrd" {...a11yProps(1)} />
          {/* <StyledTab label="Personal" {...a11yProps(2)} /> */}
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <UserInfo />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Password />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        <Personal />
      </CustomTabPanel> */}
    </Box>
  );
}
