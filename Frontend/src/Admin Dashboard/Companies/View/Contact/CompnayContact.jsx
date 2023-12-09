import React, { useEffect, useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ArrowRightAltRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function CompnayContact({ contact }) {
  const [open, setOpen] = React.useState(false);
  const [contacts, setContacts] = useState([]);
  const [objectType] = useState(String(localStorage.getItem("ObjectType")));
  const [objectID] = useState(contact.CompanyID);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    // Simulating fetching contacts from the database (Replace this with your actual fetch function)
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/api/contacts?objectType=${objectType}&objectID=${objectID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setContacts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const renderContacts = () => {
    const contactGroups = {};

    // Group contacts by their keys
    contacts.forEach((contact) => {
      const key = Object.keys(contact)[0];
      if (!contactGroups[key]) {
        contactGroups[key] = [];
      }
      contactGroups[key].push(contact[key]);
    });

    return Object.keys(contactGroups).map((key) => (
      <div key={key}>
        <Typography
          primary={key}
          component="h3"
          varient="h3"
          sx={{ fontWeight: "bold" }}
        >
          {key}
        </Typography>
        <List component="div" disablePadding>
          {contactGroups[key].map((value, index) => (
            <ListItemButton key={`${key}-${index}`} sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowRightAltRounded />
              </ListItemIcon>
              <ListItemText primary={value} />
            </ListItemButton>
          ))}
        </List>
      </div>
    ));
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper", height: "100% auto" }}
      fullWidth
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Company Contacts
        </ListSubheader>
      }
    >
      {contacts ? (
        renderContacts()
      ) : (
        <Box>
          <ListItemButton>
            <ListItemText
              primary="Loading contacts..."
              sx={{ margin: "50px auto", fontSize: "40px", fontWeight: "bold" }}
            />
          </ListItemButton>
        </Box>
      )}
    </List>
  );
}
