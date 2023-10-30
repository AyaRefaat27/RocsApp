import React, { useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { t } from "i18next";
import {
  AddHomeWorkRounded,
  DomainAddRounded,
  RecentActorsRounded,
} from "@mui/icons-material";

import AddCompany from "./AddCompany";
import AllCompanies from "./AllCompanies";
import AddCompanyContact from "./AddCompanyContact";
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

export default function Companies() {
  const [value, setValue] = React.useState(0);

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
            icon={<DomainAddRounded />}
            iconPosition="start"
            label={t("Companies")}
            {...a11yProps(0)}
          />
          <StyledTab
            icon={<AddHomeWorkRounded />}
            iconPosition="start"
            label={t("Add Company")}
            {...a11yProps(1)}
          />
          <StyledTab
            icon={<RecentActorsRounded />}
            iconPosition="start"
            label={t("Contacts")}
            {...a11yProps(2)}
          />
        </StyledTabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AllCompanies />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddCompany />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddCompanyContact />
      </CustomTabPanel>
    </Box>
  );
}
