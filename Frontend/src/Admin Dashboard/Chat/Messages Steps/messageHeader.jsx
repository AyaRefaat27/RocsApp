import React, { useState } from "react";
import styled from "@emotion/styled";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
  createTheme,
} from "@mui/material";

const header = [
  {
    value: "Main Menu",
    label: "Text",
  },
  {
    value: "Sub Menu1",
    label: "Photo",
  },
  {
    value: "Sub Menu2",
    label: "Video",
  },
  {
    value: "Sub Menu3",
    label: "GIF",
  },
];
export default function MessageHeader() {
  const theme = createTheme();
  const Android12Switch = styled(Switch)(() => ({
    padding: 8,
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      "&:before, &:after": {
        content: '""',
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        width: 16,
        height: 16,
      },
      "&:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      "&:after": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main)
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "none",
      width: 16,
      height: 16,
      margin: 2,
    },
  }));
  return (
    <>
      <Box
        sx={{
          p: 1,
          mt: 2,
          mb: 2,
          borderRadius: "0.5rem",
          boxShadow: "0 0 10px #ddd",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "10px",
          }}
        >
          <Typography
            varient="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              borderBottom: "2px solid #0288D1",
              color: "#333",
            }}
          >
            {" "}
            Header
          </Typography>

          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Android12Switch defaultChecked />}
                label="Active Menu"
              />
            </FormGroup>
          </Box>
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="Main Menu"
              helperText="Select Menu"
            >
              {header.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                startAdornment={
                  <InputAdornment position="start">Value:</InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Box>
        <Button type="submit" varient="outlined">
          Save <ArrowRightRoundedIcon />
        </Button>
      </Box>
    </>
  );
}
