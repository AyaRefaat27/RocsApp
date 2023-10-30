import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

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

const contacts = ["Ahmed", "Mohamed", "Hassan", "Omar", "Ali", "Ibrahiem"];

function getContactStyles(name, contact, theme) {
  return {
    fontWeight:
      contact.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function TeamDetails() {
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

  const theme = useTheme();
  const [contact, setContact] = useState([]);

  const handleContactChange = (event) => {
    const {
      target: { value },
    } = event;
    setContact(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [field, setField] = useState("");

  const handleChangeField = (event) => {
    setField(event.target.value);
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
        Add Team Data
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

        {/* Field & Company */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
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

        {/* Branch & Contacts */}
        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-label">
                {t("Company Branches")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field}
                label={`${t("Branches")}`}
                onChange={handleChangeField}
                fullWidth
              >
                <MenuItem value="cairo">Cairo</MenuItem>
                <MenuItem value="london">London</MenuItem>
                <MenuItem value="tokyo">Tokyo</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel id="demo-simple-select-label">
                {t("Field")}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={field}
                label={`${t("Field")}`}
                onChange={handleChangeField}
                fullWidth
              >
                <MenuItem value="programming">Programming</MenuItem>
                <MenuItem value="engineer">Engineer</MenuItem>
                <MenuItem value="food">Food</MenuItem>
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
