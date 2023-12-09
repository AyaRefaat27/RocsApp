import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";

import {
  Box,
  Button,
  Typography,
  DialogActions,
  DialogContent,
} from "@mui/material";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { ContactPageRounded, ContactsRounded } from "@mui/icons-material";
import BasicInfo from "./Basic_Info/BasicInfo";
import Contacts from "./Contacts/Contacts";
import Channels from "./Channels/Channels";
import Teams from "./Teams/Teams";
import Skills from "./Skills/Skills";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function ViewUserDetails({ open, onClose, userData }) {
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

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      sx={{ p: 2 }}
      fullWidth
      aria-labelledby="responsive-dialog-title"
      maxWidth="xl"
      open={open}
      onClose={handleClose}
    >
      <DialogContent>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "100%",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab
              icon={<ContactPageRounded />}
              iconPosition="start"
              label={t("Basic Info")}
              {...a11yProps(0)}
            />
            <Tab
              icon={<ContactsRounded />}
              iconPosition="start"
              label={t("Contact")}
              {...a11yProps(1)}
            />
            <Tab
              icon={<ContactsRounded />}
              iconPosition="start"
              label={t("Teams")}
              {...a11yProps(2)}
            />
            <Tab
              icon={<ContactsRounded />}
              iconPosition="start"
              label={t("Channels")}
              {...a11yProps(3)}
            />
            <Tab
              icon={<ContactsRounded />}
              iconPosition="start"
              label={t("Skills")}
              {...a11yProps(4)}
            />
            <Tab
              icon={<ContactsRounded />}
              iconPosition="start"
              label={t("Activites")}
              {...a11yProps(5)}
            />
          </Tabs>

          <TabPanel value={value} index={0}>
            <BasicInfo info={userData} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Contacts contacts={userData} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Teams userTeam={userData} />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Channels channels={userData} />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Skills skills={userData} />
          </TabPanel>
          <TabPanel value={value} index={5}>
            activites
          </TabPanel>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
