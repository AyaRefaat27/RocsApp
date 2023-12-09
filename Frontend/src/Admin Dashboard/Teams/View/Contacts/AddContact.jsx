import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Fab,
  Grid,
  Divider,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function AddContact({ add }) {
  const navigate = useNavigate();
  const [fields, setFields] = useState([{ platform: "", value: "" }]);
  const [objectType] = useState(String(localStorage.getItem("ObjectType")));
  const [objectID] = useState(add.TeamID);

  const handleAddField = () => {
    setFields([...fields, { platform: "", value: "" }]);
  };

  const handleFieldChange = (index, key, value) => {
    const updatedFields = [...fields];
    updatedFields[index][key] = value;
    setFields(updatedFields);
  };

  const handleAddContact = async (e) => {
    e.preventDefault();

    const formattedContacts = fields
      .filter((field) => field.platform && field.value)
      .map(({ platform, value }) => ({ [platform]: value }));

    const requestData = {
      objectType,
      contact: formattedContacts,
      objectID,
    };

    try {
      const res = await fetch("http://localhost:3002/api/contacts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        Credentials: "include",
        body: JSON.stringify(requestData),
      });
      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }
      alert("Contact Addes Successfully.");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <Typography gutterBottom variant="h6" component="div">
        Add Contact
      </Typography>

      <Box
        component="form"
        Validat
        onSubmit={handleAddContact}
        sx={{ width: 700 }}
      >
        {fields.map((field, index) => (
          <Box key={index}>
            <Grid container spacing={3} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Contact Type</InputLabel>
                  <Select
                    value={field.platform}
                    onChange={(e) =>
                      handleFieldChange(index, "platform", e.target.value)
                    }
                  >
                    <MenuItem value="Twitter">Twitter</MenuItem>
                    <MenuItem value="FB">Facebook</MenuItem>
                    <MenuItem value="Website">Website</MenuItem>
                    <MenuItem value="Mail">Email</MenuItem>
                    <MenuItem value="Phone">Phone</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Divider />
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Value"
                  value={field.value}
                  onChange={(e) =>
                    handleFieldChange(index, "value", e.target.value)
                  }
                />
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>

      <Box>
        <Fab
          sx={{
            position: "absolute",
            top: 215,
            right: 600,
          }}
          size="small"
          color="info"
          aria-label="add"
          onClick={handleAddField}
        >
          <Add />
        </Fab>
      </Box>
      <Box>
        <Button
          size="medium"
          color="primary"
          type="submit"
          varient="contained"
          fullWidth
          onClick={handleAddContact}
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
}
