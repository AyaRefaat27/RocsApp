import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ContactsTab from "./Contacts/ContactsTab";
import TeamTab from "./Users Teams/TeamTab";
import TeamInfo from "./TeamInfo";

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

export default function ViewDialog({ open, onClose, team }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            height: 400,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Team Info" {...a11yProps(0)} />
            <Tab label="Users" {...a11yProps(1)} />
            <Tab label="Contacts" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TeamInfo info={team} />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TeamTab teams={team} />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ContactsTab contacts={team} />
          </TabPanel>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
