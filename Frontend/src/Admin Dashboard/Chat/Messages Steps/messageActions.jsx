import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { Box, Button, Typography } from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import { useDispatch } from "react-redux";
import { updateButtonData } from "../Functions/buttonSlice";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function MessageActions() {
  const dispatch = useDispatch();

  const [buttons, setButtons] = useState([]);
  const [buttonSize, setButtonSize] = useState("");
  const [buttonVariant, setButtonVariant] = useState("");
  const [buttonPath, setButtonPath] = useState("");
  const [buttonName, setButtonName] = useState("");

  const handleButtonSizeChange = (event) => {
    setButtonSize(event.target.value);
  };

  const handleButtonVariantChange = (event) => {
    setButtonVariant(event.target.value);
  };

  const handleButtonPathChange = (event) => {
    setButtonPath(event.target.value);
  };

  const handleButtonNameChange = (event) => {
    setButtonName(event.target.value);
  };

  const handleAddButton = () => {
    const newButton = {
      text: buttonName,
      size: buttonSize,
      variant: buttonVariant,
      path: buttonPath,
    };

    setButtons([...buttons, newButton]);
    setButtonName("");
    setButtonSize("");
    setButtonVariant("");
    setButtonPath("");
  };

  const handleRemoveButton = (index) => {
    const updatedButtons = buttons.filter((_, i) => i !== index);
    setButtons(updatedButtons);
  };

  const handleSaveStepFive = (event) => {
    event.preventDefault();

    // Save the buttons data in localStorage
    localStorage.setItem("buttonsData", JSON.stringify(buttons));

    // Dispatch the action to update the data in the Redux store
    dispatch(updateButtonData(buttons));
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSaveStepFive}
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
            Message Actions
          </Typography>
        </Box>

        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {/* Button Name */}
            <FormControl sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="demo-customized-textbox">
                Button Name
              </InputLabel>
              <BootstrapInput
                id="demo-customized-textbox"
                value={buttonName}
                onChange={handleButtonNameChange}
              />
            </FormControl>

            {/* Button Varient */}
            <FormControl sx={{ m: 1, width: "55%" }} variant="standard">
              <InputLabel id="demo-varient-customized-select-label">
                Button Varient
              </InputLabel>
              <Select
                labelId="demo-varient-customized-select-label"
                id="demo-varient-customized-select"
                value={buttonVariant}
                onChange={handleButtonVariantChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="outlined">Outlined</MenuItem>
                <MenuItem value="contained">Contained</MenuItem>
                <MenuItem value="filled">Filled</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {/* Size */}
            <FormControl sx={{ m: 1, width: "50%" }} variant="standard">
              <InputLabel id="demo-size-customized-select-label">
                Button Size
              </InputLabel>
              <Select
                labelId="demo-size-customized-select-label"
                id="demo-size-customized-select"
                value={buttonSize}
                onChange={handleButtonSizeChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="large">Large</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="small">Small</MenuItem>
              </Select>
            </FormControl>

            {/* Path */}
            <FormControl sx={{ m: 1, width: "40%" }} variant="standard">
              <InputLabel id="demo-path-customized-select-label">
                Button Path
              </InputLabel>
              <Select
                labelId="demo-path-customized-select-label"
                id="demo-path-customized-select"
                value={buttonPath}
                onChange={handleButtonPathChange}
                input={<BootstrapInput />}
              >
                <MenuItem value="website">Website</MenuItem>
                <MenuItem value="customer_service">Customer Service</MenuItem>
                <MenuItem value="profile">Profile</MenuItem>
                <MenuItem value="contact">Contact Us</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button onClick={handleAddButton} varient="filled" sx={{ m: 1 }}>
            Add Button
          </Button>
        </div>

        {buttons.map((button, index) => {
          return (
            <Box key={index}>
              <Button
                variant={button.variant}
                href={button.path}
                size={button.size}
                sx={{ m: 1, p: 1, width: "50ch" }}
              >
                {button.text}
              </Button>
              <Button
                varient="filled"
                sx={{ m: 1 }}
                onClick={() => handleRemoveButton(index)}
              >
                Remove Button
              </Button>
            </Box>
          );
        })}

        <Button type="submit" varient="outlined">
          Save <ArrowRightRoundedIcon />
        </Button>
      </Box>
    </>
  );
}
