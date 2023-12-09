import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";
import { ContactPageRounded, ContactsRounded } from "@mui/icons-material";
import CompanyChannel from "./CompanyChannel";
import AddCompanyChannel from "./AddCompanyChannel";

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
export default function CompnayChannels({ companyChannels }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Language
  const { t } = useTranslation();

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <StyledTab
            icon={<ContactPageRounded />}
            iconPosition="start"
            label={t("Channels")}
            {...a11yProps(0)}
          />
          <StyledTab
            icon={<ContactsRounded />}
            iconPosition="start"
            label={t("Add Channel")}
            {...a11yProps(1)}
          />
        </StyledTabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <CompanyChannel channel={companyChannels} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <AddCompanyChannel addchannel={companyChannels} />
      </CustomTabPanel>
    </Box>
  );
}
