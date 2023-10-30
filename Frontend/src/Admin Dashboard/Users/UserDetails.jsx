import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const teams = [
  "Marketing Team",
  "Social Media Team",
  "Analysis Team",
  "E-Commerce Team",
  "Customer Services Team",
  "Technical Team",
  "IT Team",
];

const contacts = ["Ahmed", "Mohamed", "Hassan", "Omar", "Ali", "Ibrahiem"];

function getTeamStyles(name, team, theme) {
  return {
    fontWeight:
      team.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getContactStyles(name, contact, theme) {
  return {
    fontWeight:
      contact.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function UserDetails() {
  const theme = useTheme();
  const [team, setTeam] = useState([]);
  const [contact, setContact] = useState([]);

  const handleTeamChange = (event) => {
    const {
      target: { value },
    } = event;
    setTeam(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleContactChange = (event) => {
    const {
      target: { value },
    } = event;
    setContact(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [country, setCountry] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Box
      sx={{
        borderRadius: "25px",
        boxShadow: "0px 0px 10px #ddd",
        p: 3,
        height: "100% auto",
      }}
    >
      <Typography gutterBottom variant="h4" component="div">
        Add User Data
      </Typography>

      <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
        {/* Name */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              id="english_name"
              name="english_name"
              label="Full Name in English"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="arabic_name"
              id="arabic_name"
              label="Full Name in Arabic"
              dir="rtl"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Username & Email */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-email"
              id="email"
              name="email"
              label="Email"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-username"
              name="username"
              id="username"
              label="Username"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Position & Company */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-position"
              id="position"
              name="position"
              label="Position"
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="company"
              id="company"
              name="company"
              label="Company"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Location & Country  */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Country</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="egypt">Egypt</MenuItem>
                <MenuItem value="saudia">Saudia Arabia</MenuItem>
                <MenuItem value="emarates">Emarates</MenuItem>
                <MenuItem value="turky">Turky</MenuItem>
                <MenuItem value="oman">Oman</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="address"
              name="address"
              id="address"
              label="Location"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Phone & City */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={country}
                label="Country"
                onChange={handleChange}
                fullWidth
              >
                <MenuItem value="cairo">Cairo</MenuItem>
                <MenuItem value="giza"> Giza</MenuItem>
                <MenuItem value="nasr-city">Nasr City</MenuItem>
                <MenuItem value="el-zamalek">El-Zamalek</MenuItem>
                <MenuItem value="october">6 October</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="phone"
              id="phone"
              name="phone"
              label="Phone Number"
              required
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Teams & Contacts */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">Teams</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                value={team}
                onChange={handleTeamChange}
                defaultValue={"Marketing Team"}
                input={
                  <OutlinedInput id="select-multiple-chip" label="Teams" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {teams.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getTeamStyles(name, team, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-multiple-chip-label">Contacts</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                value={contact}
                onChange={handleContactChange}
                defaultValue={"Marketing Team"}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {contacts.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getContactStyles(name, contact, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Button size="medium" color="primary">
        Save
      </Button>
    </Box>
  );
}
