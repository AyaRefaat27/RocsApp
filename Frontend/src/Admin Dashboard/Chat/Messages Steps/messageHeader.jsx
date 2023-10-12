import React, { useState } from "react";
import styled from "@emotion/styled";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Box,
  Button,
  CardMedia,
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
import { useDispatch } from "react-redux";
import { updateData } from "../Functions/cardSlice";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: "100%";
  m:1,
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: "50ch";
`;

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

  const [dataType, setDataType] = useState("");
  const [textValue, setTextValue] = useState("");
  const [photoValue, setPhotoValue] = useState(null);
  const [videoValue, setVideoValue] = useState(null);

  const dispatch = useDispatch();

  const handleDataTypeChange = (event) => {
    setDataType(event.target.value);
  };

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhotoValue(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideoValue(event.target.files[0]);
  };

  const handleSaveStepTwo = (event) => {
    event.preventDefault();

    const cardData = {
      dataType,
      textValue,
      photoValue,
      videoValue,
    };

    // Save the data in localStorage
    localStorage.setItem("cardData", JSON.stringify(cardData));

    // Dispatch the action to update the data in the Redux store
    dispatch(updateData(cardData));
  };
  return (
    <>
      <Box
        component="form"
        onSubmit={handleSaveStepTwo}
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
            flexWrap: "wrap",
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
          sx={{
            "& .MuiTextField-root": { m: 1, width: "100%" },
            padding: "10px",
          }}
        >
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="Text"
              value={dataType}
              onChange={handleDataTypeChange}
              helperText="Select Header Type"
            >
              <MenuItem value="text">Text</MenuItem>
              <MenuItem value="photo">Photo</MenuItem>
              <MenuItem value="video">Video</MenuItem>
            </TextField>
          </div>
          <div>
            {/* Text */}
            {dataType === "text" && (
              <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  multiline
                  value={textValue}
                  onChange={handleTextChange}
                  startAdornment={
                    <InputAdornment position="start">
                      Message Header:
                    </InputAdornment>
                  }
                />
              </FormControl>
            )}

            {/* Photo */}
            {dataType === "photo" && (
              <>
                <Box width="100%">
                  <Button
                    component="label"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    sx={{ m: 1, width: "30ch" }}
                  >
                    Upload Image
                    <VisuallyHiddenInput
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                    />
                  </Button>
                  {photoValue && (
                    <CardMedia
                      component="img"
                      height="100"
                      width="100"
                      image={URL.createObjectURL(photoValue)}
                      alt="Uploades Image"
                    />
                  )}
                </Box>
                {/* <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-weight"
                  multiline
                  value={textValue}
                  onChange={handleTextChange}
                  startAdornment={
                    <InputAdornment position="start">
                      Message Header:
                    </InputAdornment>
                  }
                />
              </FormControl> */}
              </>
            )}

            {/* Video */}
            {dataType === "video" && (
              <>
                <Box width="100%">
                  <Button
                    component="label"
                    variant="outlined"
                    sx={{ m: 1, width: "30ch" }}
                    startIcon={<CloudUploadIcon />}
                  >
                    Upload Video
                    <VisuallyHiddenInput
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                  </Button>
                  {videoValue && (
                    <CardMedia
                      component="video"
                      height="100"
                      width="100"
                      controls
                      video={URL.createObjectURL(videoValue)}
                      alt=" Uploades Video"
                    />
                  )}
                </Box>
              </>
            )}
          </div>
        </Box>
        <Button type="submit" varient="outlined">
          Save <ArrowRightRoundedIcon />
        </Button>
      </Box>
    </>
  );
}
