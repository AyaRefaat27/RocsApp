import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavBar from "../NavBar/navBar";
import { useTranslation } from "react-i18next";
import SideNav from "../Sidnav/sidenav";
import Cookies from "js-cookie";

import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import {
  AddIcCallRounded,
  GroupAddRounded,
  GroupRounded,
  PeopleRounded,
} from "@mui/icons-material";
import AddTeamContact from "./AddTeamContact";
import AddTeams from "./AddTeams";
import AllTeams from "./AllTeams";

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
    maxWidth: 30,
    width: "100%",
    backgroundColor: "#d1a981",
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
      color: "#be9164",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#be9164",
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

export default function Teams() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Typography variant="h4">{t("Teams")}</Typography>

          <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
            <Box
              sx={{
                marginTop: "10px",
                background: "#fff",
                height: "100% auto",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <StyledTabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <StyledTab
                    icon={<GroupRounded />}
                    iconPosition="start"
                    label={t("Teams")}
                    {...a11yProps(0)}
                  />
                  <StyledTab
                    icon={<GroupAddRounded />}
                    iconPosition="start"
                    label={t("Add Team")}
                    {...a11yProps(1)}
                  />
                  <StyledTab
                    icon={<AddIcCallRounded />}
                    iconPosition="start"
                    label={t("Contacts")}
                    {...a11yProps(2)}
                  />
                </StyledTabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <AllTeams />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <AddTeams />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <AddTeamContact />
              </CustomTabPanel>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
