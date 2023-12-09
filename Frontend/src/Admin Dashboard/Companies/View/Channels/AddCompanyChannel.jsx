import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Button, Grid, Typography } from "@mui/material";
import { DoubleArrowRounded } from "@mui/icons-material";

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

const names = [
  "Phone",
  "Facebook",
  "Twitter",
  "Instagram",
  "Telegram",
  "Email",
  "Website",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddCompanyChannel({ addchannel }) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ fontWeight: "bold", mt: 5 }}
        >
          Add Contact
          <DoubleArrowRounded />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box component="form" Validat>
          <FormControl sx={{ m: 1, width: 500 }}>
            <InputLabel id="demo-multiple-chip-label">Channel</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="Channel" />
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
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: 200, m: 1, p: 1 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
