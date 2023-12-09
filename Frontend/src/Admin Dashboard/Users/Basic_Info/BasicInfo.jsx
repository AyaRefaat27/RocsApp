import React, { useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  CircularProgress,
  Collapse,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    borderRadius: "50%",
    width: "15px",
    height: "15px",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const languages = ["Arabic", "English"];

function getLanguageStyles(name, language, theme) {
  return {
    fontWeight:
      language.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function BasicInfo({ info }) {
  const [value, setValue] = useState("Online");
  const theme = useTheme();
  const [language, setLanguage] = useState("");
  const handleLanguageChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguage(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // Get User From DB
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const userID = info.UserID;
  useEffect(() => {
    fetchUser();
  }, [userID]);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/user/1?userID=${userID}`
      );
      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        console.error("Error fetching user:", data.message);
      }

      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false);
    }
  };

  // State to manage form values
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const updateUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/api/user?userID=${userID}`, // Replace with your update user API endpoint
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const data = await response.json();
      if (response.ok) {
        console.log("User data updated successfully:", data);
        // You can update the user state here to reflect the changes in UI
      } else {
        console.error("Error updating user:", data.message);
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <>
      <Box>
        <Typography component="h2" varient="h2" sx={{ fontWeight: "bold" }}>
          {" "}
          Hello {info.NameEnglish}{" "}
        </Typography>
        <Box component="form" Validate>
          {loading ? (
            <CircularProgress />
          ) : (
            user && (
              <>
                <Box
                  sx={{
                    flexGrow: 1,
                    margin: "20px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 2,
                    width: "1000px",
                  }}
                >
                  {/* Photo Card */}
                  <Box sx={{ width: "250px" }}>
                    <Card
                      sx={{
                        borderRadius: "25px",
                        boxShadow: "0px 0px 10px #ddd",
                      }}
                    >
                      <CardActionArea
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "2",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <CardMedia height="100% auto">
                          <Avatar
                            sx={{
                              width: "200px",
                              height: "200px",
                              border: "1px solid #ddd",
                              boxShadow: "0px 0px 10px #ddd",
                              p: 5,
                              m: 3,
                            }}
                            alt=""
                            //   src={URL.createObjectURL(photoValue)}
                            //   image={URL.createObjectURL(photoValue)}
                            src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-business-man-avatar-png-image_6514640.png"
                          />
                        </CardMedia>
                        <CardContent
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography gutterBottom variant="h5" component="div">
                            Mohammed Hassan
                          </Typography>
                          <Typography
                            variant="body1"
                            component="div"
                            sx={{ mb: 1 }}
                          >
                            CEO Manager
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "1px solid #44b700",
                              borderRadius: "50px",
                              ml: 7,
                              width: "50%",
                            }}
                          >
                            <StyledBadge
                              overlap="circular"
                              // anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                              variant="dot"
                            />
                            <Typography
                              variant="h6"
                              component="div"
                              sx={{ paddingInlineStart: "1rem" }}
                            >
                              {value}
                            </Typography>
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>

                  {/* User Info */}
                  <Box
                    sx={{
                      width: "65%",
                      height: "100% auto",
                      borderRadius: "25px",
                      boxShadow: "0px 0px 10px #ddd",
                      p: 3,
                    }}
                  >
                    <Box>
                      <Typography gutterBottom variant="h4" component="div">
                        Your Info
                      </Typography>

                      <Box component="form" Validate sx={{ mt: 3, mb: 3 }}>
                        {/* Name */}
                        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              id="NameEnglish"
                              name="NameEnglish"
                              label="Full Name in English"
                              fullWidth
                              value={formValues.NameEnglish || user.NameEnglish}
                              onChange={handleInputChange}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-name"
                              name="NameArabic"
                              id="NameArabic"
                              label="Full Name in Arabic"
                              dir="rtl"
                              fullWidth
                              value={formValues.NameArabic || user.NameArabic}
                              onChange={handleInputChange}
                            />
                          </Grid>
                        </Grid>

                        {/* Username & Email */}
                        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-email"
                              id="UserMail"
                              name="UserMail"
                              label="Email"
                              fullWidth
                              value={formValues.UserMail || user.UserMail}
                              onChange={handleInputChange}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="given-username"
                              name="UserName"
                              id="UserName"
                              label="Username"
                              fullWidth
                              value={formValues.UserName || user.UserName}
                              onChange={handleInputChange}
                            />
                          </Grid>
                        </Grid>

                        {/* Position & Language */}
                        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="company"
                              id="company"
                              name="company"
                              label="CompanyID"
                              fullWidth
                              value={formValues.CompanyID || user.CompanyID}
                              onChange={handleInputChange}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                              <InputLabel id="demo-multiple-checkbox-label">
                                Language
                              </InputLabel>
                              <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                value={language}
                                onChange={handleLanguageChange}
                                input={<OutlinedInput label="Language" />}
                                renderValue={(selected) => selected.join(", ")}
                                MenuProps={MenuProps}
                              >
                                {languages.map((name) => (
                                  <MenuItem
                                    key={name}
                                    value={name}
                                    style={getLanguageStyles(
                                      name,
                                      language,
                                      theme
                                    )}
                                  >
                                    {name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>

                        {/* Phone & Postal Code */}
                        <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              autoComplete="phone"
                              id="UserPhone"
                              name="UserPhone"
                              label="Phone Number"
                              fullWidth
                              value={formValues.UserPhone || user.UserPhone}
                              onChange={handleInputChange}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            )
          )}
          <Button
            type="submit"
            size="medium"
            varient="outlined"
            onClick={updateUser}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}
