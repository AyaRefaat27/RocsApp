import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CompanyDetails from "./Compnay Info/CompanyDetails";
import CompanyUsers from "./User Teams/CompanyUsers";
import CompnayTeams from "./User Teams/CompnayTeams";
import UserTeams from "./User Teams/UserTeams";
import CompnayContacts from "./Contact/CompnayContacts";
import CompnayChannels from "./Channels/CompnayChannels";
import FacebookBusiness from "./Facebook Business/FacebookBusiness";

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

export default function ViewDialog({ open, onClose, company }) {
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
            <Tab label="Compnay Details" {...a11yProps(0)} />
            <Tab label="Users" {...a11yProps(1)} />
            <Tab label="Teams" {...a11yProps(2)} />
            <Tab label="Users Teams" {...a11yProps(3)} />
            <Tab label="Contacts" {...a11yProps(4)} />
            <Tab label="Channels" {...a11yProps(5)} />
            <Tab label="Facebook Business Manager" {...a11yProps(6)} />
            <Tab label="WhatsApp Accounts" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <CompanyDetails info={company} />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <CompanyUsers compnayUsers={company} />
            {/* <ContactsTab contacts={team} /> */}
          </TabPanel>

          <TabPanel value={value} index={2}>
            <CompnayTeams companyTeams={company} />
          </TabPanel>

          <TabPanel value={value} index={3}>
            <UserTeams userTeams={company} />
          </TabPanel>

          <TabPanel value={value} index={4}>
            <CompnayContacts compnayContacts={company} />
            {/* <ContactsTab contacts={team} /> */}
          </TabPanel>

          <TabPanel value={value} index={5}>
            <CompnayChannels companyChannels={company} />
          </TabPanel>

          <TabPanel value={value} index={6}>
            <FacebookBusiness facebook={company} />
          </TabPanel>

          <TabPanel value={value} index={7}>
            WhatsApp
          </TabPanel>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
